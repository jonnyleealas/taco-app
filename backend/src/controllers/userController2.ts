import {Router, Request, Response} from "express";
const controller = Router()

controller.get("/", (req: Request, res: Response) => {
    return res.send("hello bitch")
})

export default controller;
