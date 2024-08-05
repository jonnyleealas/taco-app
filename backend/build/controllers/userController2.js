"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../databases/postgres/entities/user");
const controller = (0, express_1.Router)();
controller.get("/", async (req, res) => {
    try {
        // fetch all users
        const users = await user_1.Person.find();
        // check if users is empty
        if (users.length === 0) {
            return res.status(404).send("No users found");
        }
        return res.json(users);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error has occured while fetching users");
    }
});
controller.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        // find user by id
        const user = await user_1.Person.findOneBy({ id: parseInt(id) });
        // check if user is found
        if (!user) {
            return res.status(404).send("User not found");
        }
        // return the user data in JSON format
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error has occured while fetching user");
    }
});
controller.post("/", async (req, res) => {
    const { firstName, lastName, email, favoriteColor } = req.body;
    const newUser = user_1.Person.create({
        firstName: firstName,
        lastName: lastName,
        email,
        favoriteColor: favoriteColor
    });
    await newUser.save();
    return res.json(newUser);
});
controller.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        // Find the existing user by ID
        const user = await user_1.Person.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).send("User not found");
        }
        // Merge changes from the request body into the existing user object
        const changes = req.body;
        const updatedUser = { ...user, ...changes };
        // Save the updated user
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
        // find user by id
        const user = await user_1.Person.findOneBy({ id: parseInt(id) });
        // check if user exists
        if (!user) {
            return res.status(404).send("User not found");
        }
        // delete user
        await user.remove();
        // return a success message
        return res.send("User deleted successfully");
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred while updating the user");
    }
});
exports.default = controller;
