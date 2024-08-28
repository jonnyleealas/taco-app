// import express from "express";
// import appSetup from "./startup/init";
// import routerSetup from "./startup/router";
// import securitySetup from "./startup/security";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// void appSetup(app);
// securitySetup(app, express);
// routerSetup(app);

import express from 'express';
import dotenv from 'dotenv';
import appSetup from './startup/init';
import routerSetup from './startup/router';
import session from 'express-session';
import passport from 'passport';

dotenv.config();

const app = express();

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport and session support
app.use(passport.initialize());
app.use(passport.session());

// Application Setup
void appSetup(app); // Initialize DB connection and start server
routerSetup(app); // Set up routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
