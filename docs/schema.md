# Database Schema Documentation

This document describes the database schema for the Payroll SaaS platform.  
It explains tables, columns, primary/foreign keys, and relationships.

---

## Structure

This backend implements **Prisma ORM** for database access. 
- All Prisma files (`schema.prisma`, migrations, and generated client) are located inside the backend folder. 
- The database client is initialized and exported here for use across backend services. 
- We originally considered a separate `database` folder, but to avoid configuration issues and simplify deployment, everything is consolidated under `backend`. 

---

## Usage 
Run Prisma commands from the backend folder: 
```bash 
npx prisma migrate dev 
npx prisma generate
```

---

## Tables

### 1. Departments
- **id** (PK) → unique identifier  
- **name** → department name  

### 2. Clients
- **id** (PK) → unique identifier  
- **name** → client company name  
- **contact_email** → client’s contact email  
- **created_at** → timestamp when client was added  

### 3. Employees
- **id** (PK) → unique identifier  
- **name** → employee name  
- **email** → unique email  
- **position** → job title  
- **salary** → base salary  
- **hire_date** → date of joining  
- **department_id** (FK) → references `Departments(id)`  
- **client_id** (FK) → references `Clients(id)`  

### 4. Attendance
- **id** (PK) → unique identifier  
- **employee_id** (FK) → references `Employees(id)`  
- **date** → attendance date  
- **status** → Present / Absent / Leave  

### 5. Payroll
- **id** (PK) → unique identifier  
- **employee_id** (FK) → references `Employees(id)`  
- **month** → payroll month  
- **amount** → net salary paid  
- **paid_on** → date of payment  

---

## 🔗 Relationships

- **Departments → Employees**  
  - One department has many employees (**1:N**).  

- **Clients → Employees**  
  - One client has many employees (**1:N**).  

- **Employees → Attendance**  
  - One employee has many attendance records (**1:N**).  

- **Employees → Payroll**  
  - One employee has many payroll records (**1:N**).  

---



