import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const getEmployees = () => API.get("/employees");
export const addEmployee = (data) => API.post("/employees", data);
export const updateEmployee = (id, data) => API.put(`/employees/${id}`, data);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);
