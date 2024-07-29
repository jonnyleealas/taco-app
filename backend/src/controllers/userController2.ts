import {Router, Request, Response} from "express";
import { useTypeORM } from "../databases/postgres/typeOrm";
const controller = Router()

// NOTES ABOUT NEXT STEP: learn to add to database and use orm

controller.get("/", (req: Request, res: Response) => {
    return res.send("hello bitch")
})

controller.get("/:id", (req: Request, res: Response) => {
    return res.send("get by id")
})

controller.post("/", (req: Request, res: Response) => {
    return res.send("post")
})

controller.put("/", (req: Request, res: Response) => {
    return res.send("put")
})

controller.put("/:id", (req: Request, res: Response) => {
    return res.send("update by id")
})

controller.delete("/:id", (req: Request, res: Response) => {
    return res.send("delete by id")
})


export default controller;
