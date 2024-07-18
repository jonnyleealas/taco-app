import {Router, Request, Response} from "express";
const controller = Router()

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
