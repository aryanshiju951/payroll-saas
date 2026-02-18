export async function calculatePayroll(data) {
  // Basic validation
  if (data.salary < 0) {
    const error = new Error("Invalid Salary Input: negative values");
    error.status = 400;
    throw error;
  }

  // Core formulas
  const grossSalary = data.salary + (data.allowances || 0) + (data.bonuses || 0);
  const overtimePay = (data.overtimeHours || 0) * (data.hourlyRate || 0) * (data.multiplier || 1);
  const deductions = (data.tax || 0) + (data.pf || 0) + (data.otherDeductions || 0);
  const netSalary = grossSalary + overtimePay - deductions;

  return {
    grossSalary,
    overtimePay,
    deductions,
    netSalary
  };
}
