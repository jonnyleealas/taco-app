import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import appSetup from './startup/init';
import routerSetup from './startup/router';
import session from 'express-session';
import passport from './startup/passportConfig';


const app = express();

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session middleware with your secret
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }, // Secure cookies in production
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
