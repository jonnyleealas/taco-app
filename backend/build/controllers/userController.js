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
