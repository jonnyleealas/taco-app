import { Express, Request, Response } from "express";
import userController2 from "../controllers/userController2";

const routerSetup = (app: Express) =>
  app.get("/", async (req: Request, res: Response) => {
      res.send("Hello world!");
    })
    .use("/api/v1/users", userController2);

export default routerSetup;
