# Frontend Documentation 

This document describes the frontend planning for the Payroll SaaS platform. It explains the component structure, page planning, and role-based access.

---

## Frontend Page Planning

| Page               | Access Role     | Description |
|--------------------|-----------------|-------------|
| **Login**          | All             | Entry point for authentication |
| **HR Dashboard**   | HR only         | Manage employees, departments, payroll |
| **Employee Dashboard** | Employee only | View personal attendance and payroll |
| **Employee Management** | HR only     | CRUD operations on employee records |
| **Payroll View**   | HR & Employee   | HR: view all payrolls, Employee: view own |

### Notes
- Role-based routing ensures HR-only pages are hidden from employees.  
- Separate dashboards improve clarity and user experience.  

---


