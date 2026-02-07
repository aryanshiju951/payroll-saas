export function validateEmployee(req, res, next) {
  const {name, email, phone, department, salary} = req.body;

  if (!name || !email || !phone || !department || !salary) {
    return res.status(400).json({ error: "All fields are required" });
  }
  next();
}
