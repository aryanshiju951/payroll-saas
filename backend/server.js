import "dotenv/config";
import express from "express";
import employeeRoutes from "./routes/employeeRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { PORT } from "./config/env.js";
import cors from "cors";
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(express.json());

app.use(employeeRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
