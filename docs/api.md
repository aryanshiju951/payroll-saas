# REST API Documentation 

This document describes the planned REST API endpoints for the Payroll SaaS platform.  
All APIs follow REST conventions and return JSON responses.

---

## Authentication

### `POST /api/login`
- **Purpose:** Authenticate user with email/password.  
- **Response:** Returns a JWT token that includes the user’s role (hr or employee).  
- **Notes:** Token must be included in headers (`Authorization: Bearer <token>`) for protected routes.Middleware decodes the token and checks the role before allowing access.

### `GET /api/profile`
- **Purpose:** Fetch logged-in user’s profile.  
- **Access:** Requires valid JWT.  
- **Response:** User details (id, name, role).

---

## Employees

### `POST /api/employees`
- **Purpose:** Create a new employee record.  
- **Access:** HR only.  
- **Body:** `{ "name": "...", "email": "...", "position": "...", "salary": ... }`

### `GET /api/employees`
- **Purpose:** Get list of all employees.  
- **Access:** HR only.  
- **Response:** Array of employee objects.

### `GET /api/employees/:id`
- **Purpose:** Get details of a specific employee.  
- **Access:** HR only.  
- **Response:** Employee object.

### `PUT /api/employees/:id`
- **Purpose:** Update employee details.  
- **Access:** HR only.  
- **Body:** Fields to update.

### `DELETE /api/employees/:id`
- **Purpose:** Delete an employee record.  
- **Access:** HR only.  

---

## Departments

### `POST /api/departments`
- **Purpose:** Create a new department.  
- **Access:** HR only.  

### `GET /api/departments`
- **Purpose:** List all departments.  
- **Access:** HR only.  

### `PUT /api/departments/:id`
- **Purpose:** Update department details.  
- **Access:** HR only.  

### `DELETE /api/departments/:id`
- **Purpose:** Delete a department.  
- **Access:** HR only.  

---

## Attendance

### `POST /api/attendance`
- **Purpose:** Record attendance for an employee.  
- **Access:** HR or Employee.  
- **Body:** `{ "employee_id": ..., "date": "...", "status": "Present/Absent/Leave" }`

### `GET /api/attendance/employee/:id`
- **Purpose:** Get attendance records for a specific employee.  
- **Access:** HR or Employee.   

### `GET /api/attendance/date/:date`
- **Purpose:** Get attendance records for a specific date.  
- **Access:** HR only.  

---

## Payroll

### `POST /api/payroll`
- **Purpose:** Generate payroll record for an employee.  
- **Access:** HR only.  
- **Body:** `{ "employee_id": ..., "month": "...", "amount": ... }`

### `GET /api/payroll/month/:month`
- **Purpose:** Fetch payroll records for a given month.  
- **Access:** HR only.  

### `GET /api/payroll/employee/:id`
- **Purpose:** Fetch payroll records for a specific employee.  
- **Access:** HR or Employee (self).  

---

