import { Router, Request, Response } from "express";
import { Person } from "../databases/postgres/entities/user";
import bcrypt from "bcrypt";

const controller = Router();

controller.get("/", async (req: Request, res: Response) => {
    try {
        const users = await Person.find();
        if (users.length === 0) {
            return res.status(404).send("No users found");
        }
        return res.json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).send("An error has occurred while fetching users");
    }
});

controller.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("An error has occurred while fetching user");
    }
});

controller.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }

        const changes: Partial<Person> = req.body;
        const updatedUser = { ...user, ...changes };

        await Person.save(updatedUser);

        return res.send("User updated successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).send("An error occurred while updating the user");
    }
});

controller.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }

        await user.remove();

        return res.send("User deleted successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred while deleting the user");
    }
});

export default controller;
