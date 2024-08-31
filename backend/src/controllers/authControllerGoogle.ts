import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Person } from '../databases/postgres/entities/user';
import bcrypt from 'bcrypt';

const controller = Router();

// POST /api/v1/login - Login route
controller.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Person.findOneBy({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Return success response
    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.log(error);
    return res.status(500).send('An error occurred during login');
  }
});

// POST /api/v1/logout - Logout route (optional, depending on your session strategy)
controller.post('/logout', (req: Request, res: Response) => {
  // Here you could implement logic for logout if you use session-based authentication
  return res.json({ message: 'Logout successful' });
});

// Will need to create sign up controller and remove this post request from here
controller.post("/signup", async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  // Function to validate password
  const validatePasswordLength = (password: string) => {
      const isValidLength = password.length >= 8; // Checks for minimum length

      return isValidLength;
  };

  const validatePasswordSpaces = (password: string) => {
      const noBlankEdges = password.trim() === password; // Ensures no leading/trailing spaces
      const noSpaces = !/\s/.test(password); // Ensures there are no spaces at all
  
      return noBlankEdges && noSpaces;
  };

  if (!validatePasswordLength(password) && !validatePasswordSpaces(password)) {
      return res.status(400).json({
          error: "Password must be at least 8 characters long, and cannot contain any blank spaces."
      });
  }
  
  // Validate the password
  if (!validatePasswordLength(password)) {
      return res.status(400).json({
          error: "Password must be at least 8 characters long."
      });
  }

  // Validate if password has spaces
  if (!validatePasswordSpaces(password)) {
      return res.status(400).json({
          error: "Cannot contain any blank spaces."
      });
  }

  const hash = await bcrypt.hash(password, 10);

  try {
      // Check if the email already exists
      const existingUser = await Person.findOneBy({ email });

      if (existingUser) {
          console.log("email already exists");
          return res.status(400).json({ error: "Email already exists" });
      }

      // Create a new user with the provided email
      const newUser = Person.create({
          firstName,
          lastName,
          email,
          password: hash,
      });

      await newUser.save();

      return res.status(201).json(newUser);
  } catch (error) {
      console.log(error);
      return res.status(500).send("An error occurred while creating the user");
  }
});

// GET /api/v1/auth/google - Initiates Google OAuth login
controller.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET /api/v1/auth/google/callback - Google OAuth callback route
controller.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }), 
  (req: Request, res: Response) => {
    // Successful authentication, redirect home or wherever you want
    res.redirect('http://localhost:3000');
  }
);

// GET /api/v1/auth/google/failure - Handles Google OAuth failures
controller.get('/google/failure', (req: Request, res: Response) => {
  res.status(401).json({ message: 'Google Authentication Failed' });
});

export default controller;
