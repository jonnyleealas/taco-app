import express, { Express } from 'express';
import dotenv from 'dotenv';
import typeORMConnect from '../databases/postgres/typeOrm'; // Database connection function
import authController from './controllers/authController'; // Authentication routes
import userController from './controllers/userController'; // User routes

// Initialize environment variables from .env file
dotenv.config();

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

const appSetup = async (app: Express) => {
  // Set up database connections
  try {
    await Promise.all([
      typeORMConnect(),
    ]);

    console.log('Databases connected successfully!');

    // Set up routes
    app.use('/api/v1/auth', authController); // Auth routes
    app.use('/api/v1/users', userController); // User routes

    const APP_PORT = Number(process.env.APP_PORT) || 3000;
    app.listen(APP_PORT, () => {
      console.log(`Server started on port ${APP_PORT}`);
    });

  } catch (error: unknown) {
    console.log('Unable to start the app!');
    console.error(error);
  }
};

// Run the setup
appSetup(app);

export default app;
