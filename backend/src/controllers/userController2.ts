import {Router, Request, Response} from "express";
import { useTypeORM } from "../databases/postgres/typeOrm";
import {Person} from "../databases/postgres/entities/user";
const controller = Router()

// NOTES ABOUT NEXT STEP: learn to add to database and use orm

controller.get("/", (req: Request, res: Response) => {
    const test = req
    return res.send(test)
})

controller.get("/:id", (req: Request, res: Response) => {
    return res.send("get by id")
})

controller.post("/", async (req: Request, res: Response) => {
    const {firstName, lastName, email, favoriteColor} = req.body

    const newUser = Person.create({
        firstName: firstName,
        lastName: lastName,
        email,
        favoriteColor: favoriteColor
    })

    await newUser.save()

    return res.json(newUser)
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
