import { Router, Request, Response } from "express";
import { useTypeORM } from "../databases/postgres/typeOrm";
import { DataSource } from "typeorm";
import { Person } from "../databases/postgres/entities/user";
const controller = Router()

// NOTES ABOUT NEXT STEP: learn to add to database and use orm

controller.get("/", async (req: Request, res: Response) => {

    try {
        // fetch all users
        const users = await Person.find()
        // check if users is empty
        if (users.length === 0) {
            return res.status(404).send("No users found")
        }
        return res.json(users)

    } catch (error) {
        console.log(error)
        return res.status(500).send("An error has occured while fetching users")
    }

})

controller.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        // find user by id
        const user = await Person.findOneBy({ id: parseInt(id) })
        // check if user is found
        if (!user) {
            return res.status(404).send("User not found")
        }
        // return the user data in JSON format
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).send("An error has occured while fetching user")
    }

})

controller.post("/", async (req: Request, res: Response) => {
    const { firstName, lastName, email, favoriteColor } = req.body

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



controller.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        // find user by id
        const user = await Person.findOneBy({ id: parseInt(id) })
        
        // check if user exists
        if (!user) {
            return res.status(404).send("User not found")
        }

         // delete user
        await user.remove()

        // return a success message
        return res.send("User deleted successfully")

    } catch (error) {
        console.log(error)
        return res.status(500).send("An error occurred while updating the user")
    }

})


export default controller;
