import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { getUsers, addUser } from '../database/queries.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging 
app.use(morgan('dev'));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({error:'Failed to fetch users'});
  }
});

// Add user
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await addUser(name, email); 
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({error:'Failed to add user'});
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
