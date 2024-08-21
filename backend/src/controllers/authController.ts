import { Router, Request, Response } from "express";
import { Person } from "../databases/postgres/entities/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const controller = Router();

// POST /api/v1/login - Login route
controller.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await Person.findOneBy({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        // Return success response with token
        return res.json({ message: "Login successful", token });
    } catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred during login");
    }
});

// POST /api/v1/logout - Logout route (optional, depending on your session strategy)
controller.post("/logout", (req: Request, res: Response) => {
    // Here you could implement logic to handle token invalidation if you're using a token-based approach
    return res.json({ message: "Logout successful" });
});

export default controller;