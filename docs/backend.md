#  Backend Documentation 

This document describes the backend architecture, payroll workflow and authentication strategy for the Payroll SaaS platform.

---

##  Backend Folder Structure

```
backend/
├─ routes/         # API endpoints
├─ controllers/    # Request handlers
├─ services/       # Business logic
├─ models/         # DB models or Prisma client
├─ middlewares/    # Auth, error handling
└─ config/         # Environment, DB config
```


## Payroll Processing Workflow

The payroll workflow ensures accurate salary computation and storage.

1. **Fetch employee salary** → Retrieve base salary from `Employees` table.  
2. **Evaluate attendance** → Count present, absent, and leave days from `Attendance` table.  
3. **Calculate deductions** → Deduct salary for absent days or apply leave policies.  
4. **Compute net salary** → `net = base salary - deductions`.  
5. **Store payroll record** → Insert into `Payroll` table with month, amount, and paid date.  

### Notes
- Edge cases: unpaid leave, salary changes mid-month, missing attendance records.   

---

## Authentication Strategy

The system uses **JWT-based authentication** with role-based access control.

### Flow
1. **Login** → User provides email/password.  
2. **Token Issued** → JWT contains `id`, `email`, and `role` (`hr` or `employee`).  
3. **Protected Routes** → Token required in header (`Authorization: Bearer <token>`).  
4. **Middleware** → Verifies token and role before granting access.  

### Roles
- **HR** → Full access (manage employees, departments, payroll).  
- **Employee** → Limited access (view own attendance, view own payroll, update profile).  

---

