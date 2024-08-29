import { Express, Request, Response } from 'express';
import userController2 from '../controllers/userController';
import authController from '../controllers/authController';
import homeController from '../controllers/homeController'
import authControllerGoogle from '../controllers/authControllerGoogle'

const routerSetup = (app: Express) => {
  // Setup a basic route
  app.get('/', async (req: Request, res: Response) => {
    res.send('Hello world!');
  });

  // Setup routes for userController2
  app.use('/api/v1/users', userController2);

  // Setup routes for authController
  app.use('/api/v1/auth', authController);

  // Home Controller
  app.use('/api/v1/home', homeController)
  
  // Google auth controller
  app.use('/api/v1/auth/google', authControllerGoogle)
};

export default routerSetup;
