import * as payrollService from "../services/payrollService.js";

export async function runPayroll(req, res, next) {
  try {
    const result = await payrollService.calculatePayroll(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}
