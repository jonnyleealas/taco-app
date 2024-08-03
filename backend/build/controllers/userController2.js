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
controller.get("/:id", (req, res) => {
    return res.send("get by id");
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
controller.put("/", (req, res) => {
    return res.send("put");
});
controller.put("/:id", (req, res) => {
    return res.send("update by id");
});
controller.delete("/:id", (req, res) => {
    return res.send("delete by id");
});
exports.default = controller;
