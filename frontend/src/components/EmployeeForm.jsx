import { useState, useEffect } from "react";


export default function EmployeeForm({ onSubmit, editingEmployee }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", department:"", salary:"" });

  useEffect(() => { if (editingEmployee) setForm(editingEmployee); }, [editingEmployee]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.department || !form.salary) {
      alert("All fields required"); 
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) { 
        alert("Invalid email"); 
        return false; 
    }
    if (isNaN(form.salary)) { 
        alert("Salary must be numeric"); 
        return false; 
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) { 
        onSubmit(form); 
        setForm({ name:"", email:"", phone:"", department:"", salary:"" }); 
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <input name="department" value={form.department} onChange={handleChange} placeholder="Department" />
      <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" />
      <button type="submit">{editingEmployee ? "Update" : "Add"} Employee</button>
    </form>
  );
}
