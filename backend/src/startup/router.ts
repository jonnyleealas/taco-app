import { Express, Request, Response } from "express";
import userController from "../controllers/userController";

const routerSetup = (app: Express) =>
  app.get("/", async (req: Request, res: Response) => {
      res.send("Hello world!");
    })
    .use("/api/v1/users", userController);

export default routerSetup;
