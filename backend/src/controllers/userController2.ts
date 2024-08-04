import {Router, Request, Response} from "express";
import { useTypeORM } from "../databases/postgres/typeOrm";
import { DataSource } from "typeorm";
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

controller.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        // Find the existing user by ID
        const user = await Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Merge changes from the request body into the existing user object
        const changes: Partial<Person> = req.body;
        const updatedUser = { ...user, ...changes };

        // Save the updated user
        await Person.save(updatedUser);

        return res.send("User updated successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).send("An error occurred while updating the user");
    }
});


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
