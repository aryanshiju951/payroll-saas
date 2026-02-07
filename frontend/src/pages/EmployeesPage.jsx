import { useState, useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from "../api/employees";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => { fetchEmployees(); }, []);

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingEmployee) {
        const res = await updateEmployee(editingEmployee.id, formData);
        setEmployees(employees.map(emp => emp.id === editingEmployee.id ? res.data : emp));
        setEditingEmployee(null);
        alert("Employee updated successfully");
      } else {
        const res = await addEmployee(formData);
        setEmployees([...employees, res.data]);
        alert("Employee added successfully");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Error occurred");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter(emp => emp.id !== id));
      alert("Employee deleted successfully");
    } catch (err) {
      alert(err.response?.data?.error || "Error occurred");
    }
  };

  return (
    <div>
      <EmployeeForm onSubmit={handleSubmit} editingEmployee={editingEmployee} />
      <EmployeeTable employees={employees} onEdit={setEditingEmployee} onDelete={handleDelete} />
    </div>
  );
}
