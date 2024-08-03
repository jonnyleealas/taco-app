import {Router, Request, Response} from "express";
import { useTypeORM } from "../databases/postgres/typeOrm";
import {Person} from "../databases/postgres/entities/user";
const controller = Router()

// NOTES ABOUT NEXT STEP: learn to add to database and use orm

controller.get("/", async (req: Request, res: Response) => {
    const users = await Person.find()

    return res.json(users)
})

controller.get("/:id", async (req: Request, res: Response) => {
    const {id} = req.body
    const user = await Person.findOneBy(id)
    return res.json(user)
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

controller.delete("/:id", async (req: Request, res: Response) => {
    const {id} = req.body
    const user = await Person.findOneBy({id})
    const deleteUser = await user?.remove()
    return res.send("user delete")
})


export default controller;
