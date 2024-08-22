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
// Will need to create sign up controller and remove this post request from here
controller.post("/signup", async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    // Function to validate password
    const validatePasswordLength = (password: string) => {
        const isValidLength = password.length >= 8; // Checks for minimum length

        return isValidLength
    };

    const validatePasswordSpaces = (password: string) => {
        const noBlankEdges = password.trim() === password; // Ensures no leading/trailing spaces
        const noSpaces = !/\s/.test(password); // Ensures there are no spaces at all
    
        return noBlankEdges && noSpaces;
    };

    if(!validatePasswordLength(password) && !validatePasswordSpaces(password)){
        return res.status(400).json({
            error: "Password must be at least 8 characters long, and cannot contain any blank spaces."
        })
    }
    
    // Validate the password
    if (!validatePasswordLength(password)) {
        return res.status(400).json({
            error: "Password must be at least 8 characters long."
        });
    }

    // Validate if password has spaces
    if (!validatePasswordSpaces(password)) {
        return res.status(400).json({
            error: "Cannot contain any blank spaces."
        });
    }

    const hash = await bcrypt.hash(password, 10);

    try {
        // Check if the email already exists
        const existingUser = await Person.findOneBy({ email });

        if (existingUser) {
            console.log("email already exists");
            return res.status(400).json({ error: "Email already exists" });
        }

        // Create a new user with the provided email
        const newUser = Person.create({
            firstName,
            lastName,
            email,
            password: hash,
        });

        await newUser.save();

        return res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred while creating the user");
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
