"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../databases/postgres/entities/user");
const controller = (0, express_1.Router)();
controller.get("/", async (req, res) => {
    try {
        const users = await user_1.Person.find();
        if (users.length === 0) {
            return res.status(404).send("No users found");
        }
        return res.json(users);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error has occurred while fetching users");
    }
});
controller.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await user_1.Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error has occurred while fetching user");
    }
});
controller.post("/", async (req, res) => {
    const { firstName, lastName, email, favoriteColor } = req.body;
    try {
        // Check if the email already exists
        const existingUser = await user_1.Person.findOneBy({ email });
        if (existingUser) {
            console.log("email already exists");
            return res.status(400).json({ error: "Email already exists" });
        }
        // Create a new user with the provided email
        const newUser = user_1.Person.create({
            firstName,
            lastName,
            email,
            favoriteColor,
        });
        await newUser.save();
        return res.status(201).json(newUser);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred while creating the user");
    }
});
controller.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await user_1.Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }
        const changes = req.body;
        const updatedUser = { ...user, ...changes };
        await user_1.Person.save(updatedUser);
        return res.send("User updated successfully");
    }
    catch (error) {
        console.error(error);
        return res.status(500).send("An error occurred while updating the user");
    }
});
controller.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await user_1.Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }
        await user.remove();
        return res.send("User deleted successfully");
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred while deleting the user");
    }
});
exports.default = controller;
