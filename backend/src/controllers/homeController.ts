import { Router, Request, Response } from 'express';
import { Person } from '../databases/postgres/entities/user';
import bcrypt from 'bcrypt';

const controller = Router();

// POST /api/v1/login - Login route
controller.get('/home', async (req: Request, res: Response) => {
    res.send("<h1>Home</h1>")
});

// POST /api/v1/logout - Logout route (optional, depending on your session strategy)
controller.post('/logout', (req: Request, res: Response) => {
  // Here you could implement logic for logout if you use session-based authentication
  return res.json({ message: 'Logout successful' });
});

export default controller;