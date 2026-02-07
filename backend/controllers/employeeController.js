import * as service from "../services/employeeService.js";

export async function addEmployee(req, res, next) {
  try {
    const employee = await service.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
}

export async function listEmployees(req, res, next) {
  try {
    const employees = await service.listEmployees();
    res.json(employees);
  } catch (err) {
    next(err);
  }
}

export async function getEmployee(req, res, next) {
  try {
    const employee = await service.getEmployeeById(req.params.id);
    res.json(employee);
  } catch (err) {
    next(err);
  }
}

export async function updateEmployee(req, res, next) {
  try {
    const employee = await service.updateEmployee(req.params.id, req.body);
    res.json(employee);
  } catch (err) {
    next(err);
  }
}

export async function deleteEmployee(req, res, next) {
  try {
    await service.deleteEmployee(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
