import express from "express";
import { validateEmployee } from "../middlewares/validateEmployee.js";
import * as controller from "../controllers/employeeController.js";

const router = express.Router();

router.post("/api/employees", validateEmployee, controller.addEmployee);
router.get("/api/employees", controller.listEmployees);
router.get("/api/employees/:id", controller.getEmployee);
router.put("/api/employees/:id", validateEmployee, controller.updateEmployee);
router.delete("/api/employees/:id", controller.deleteEmployee);

export default router;
