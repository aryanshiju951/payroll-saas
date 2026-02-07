import prisma from "../models/prisma.js";

export async function createEmployee(data) {
  const existing = await prisma.employee.findUnique({where:{email: data.email}});
  if (existing) {
    const error = new Error("Email already exists");
    error.status = 400;
    throw error;
  }
  return prisma.employee.create({data});
}

export async function listEmployees() {
  return prisma.employee.findMany();
}

export async function getEmployeeById(id) {
  const employee = await prisma.employee.findUnique({where:{id: Number(id)}});
  if (!employee) {
    const error = new Error("Employee not found");
    error.status = 404;
    throw error;
  }
  return employee;
}

export async function updateEmployee(id, data) {
  try {
    return await prisma.employee.update({
      where:{id: Number(id)},
      data,
    });
  } catch {
    const error = new Error("Employee not found");
    error.status = 404;
    throw error;
  }
}

export async function deleteEmployee(id) {
  try {
    return await prisma.employee.delete({where:{id: Number(id)}});
  } catch {
    const error = new Error("Employee not found");
    error.status = 404;
    throw error;
  }
}
