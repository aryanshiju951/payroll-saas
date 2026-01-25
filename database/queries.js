import pool from './db.js';

// Get all users
export async function getUsers() {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
}

// Add a new user
export async function addUser(name, email) {
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return result.rows[0];
}
