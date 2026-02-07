
export default function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(emp)}>Edit</button>
                <button className="delete-btn" onClick={() => window.confirm("Delete?") && onDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
