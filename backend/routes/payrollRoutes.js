import express from "express";
import { runPayroll } from "../controllers/payrollController.js";

const router = express.Router();

// POST /api/payroll/calculate
router.post("/api/payroll/calculate", runPayroll);

export default router;
