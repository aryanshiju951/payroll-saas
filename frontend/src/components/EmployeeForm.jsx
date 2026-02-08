import { useState, useEffect } from "react";

export default function EmployeeForm({ onSubmit, editingEmployee }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", department:"", salary:"" });

  useEffect(() => { if (editingEmployee) setForm(editingEmployee); }, [editingEmployee]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.department || !form.salary) {
      alert("All fields required"); return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) { alert("Invalid email"); return false; }
    if (isNaN(form.salary)) { alert("Salary must be numeric"); return false; }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) { 
      const payload = { 
        ...form, 
        salary: parseFloat(form.salary) 
      }; 
      onSubmit(payload);
      setForm({ name:"", email:"", phone:"", department:"", salary:"" }); }
  };

  return (
    <div className="card">
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input name="department" value={form.department} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input type="number" name="salary" value={form.salary} onChange={handleChange} />
        </div>
        <div className="form-actions">
          <button type="submit">{editingEmployee ? "Update" : "Add"} Employee</button>
        </div>
      </form>
    </div>
  );
}
