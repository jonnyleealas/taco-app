"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../databases/postgres/entities/user");
const controller = (0, express_1.Router)();
// NOTES ABOUT NEXT STEP: learn to add to database and use orm
controller.get("/", async (req, res) => {
    const users = await user_1.Person.find();
    return res.json(users);
});
controller.get("/:id", async (req, res) => {
    const { id } = req.body;
    const user = await user_1.Person.findOneBy(id);
    return res.json(user);
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
controller.put("/:id", (req, res) => {
    return res.send("update by id");
});
controller.delete("/:id", async (req, res) => {
    const { id } = req.body;
    const user = await user_1.Person.findOneBy({ id });
    const deleteUser = await user?.remove();
    return res.send("user delete");
});
exports.default = controller;
