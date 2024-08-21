import { Express, Request, Response } from 'express';
import userController2 from '../controllers/userController2';
import authController from '../controllers/authController';

const routerSetup = (app: Express) => {
  // Setup a basic route
  app.get('/', async (req: Request, res: Response) => {
    res.send('Hello world!');
  });

  // Setup routes for userController2
  app.use('/api/v1/users', userController2);

  // Setup routes for authController
  app.use('/api/v1/auth', authController);
};

export default routerSetup;
