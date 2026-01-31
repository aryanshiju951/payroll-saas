# Payroll SAAS Application

---

## About
This project is a cloud-based payroll management system.  
It helps companies handle:
- Employee records  
- Salary payments  
- Attendance tracking  
- Payroll workflows  

Because it is built as a **SaaS (Software as a Service)** application, multiple businesses can use it through a simple web interface.

---

## Objective
The goal is to:
- Learn the basics of payroll systems and how they work  
- Set up the core technical environment for full-stack development  
- Build a strong foundation for expanding the platform with more features later


##  Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** PostgreSQL

---

## Project Structure
```
payroll-app/
├─ frontend/
├─ backend/
├─ database/
├─ docs/           
```

---

## Work Completed 
### Backend 
 - Set up a Node.js + Express server with ES Module support. 
 - Configured middleware (CORS, JSON parsing). 
 - Connected to PostgreSQL using `pg` and environment variables.
 - Built sample REST API routes (health check, users CRUD). 
 - Organized code to keep database logic separate from server logic. 
### Frontend
 - Initialized a modern frontend environment (React/Vite).
 - Structured components for future payroll dashboards and forms. 
### Database
 - Created initial schema for user tables (employees, attendance, payroll).  
 - Currently using raw SQL + `pg` for queries. 
 - **Planned upgrade:** In later versions, Prisma ORM will be introduced to simplify migrations, provide type-safe queries, and improve scalability.

 ---

 ## Documentation
Detailed documentation is available in the `docs/` folder:
- [Database Schema](docs/schema.md)  
- [Backend Architecture](docs/backend.md)  
- [Frontend Planning](docs/frontend.md)  
- [REST API Documentation](docs/api.md) 

---