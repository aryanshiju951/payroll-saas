
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Payroll System</div>
      <ul className="navbar-links">
        <li><a href="/">Employees</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
}
