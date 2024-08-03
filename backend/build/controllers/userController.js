"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeOrm_1 = require("../databases/postgres/typeOrm");
const user_1 = __importDefault(require("../databases/postgres/entities/user"));
let typeORMDB;
const controller = (0, express_1.Router)();
controller.post("/", async (req, res) => {
    const newUser = new user_1.default();
    const { firstName, lastName } = req.body;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    await typeORMDB.manager.transaction(async () => {
        const savedUser = await (0, typeOrm_1.useTypeORM)(user_1.default).save(newUser);
        res.status(201).send(savedUser);
    });
});
controller.post("/getOrCreateUserByEmail", async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const foundUser = await (0, typeOrm_1.useTypeORM)(user_1.default).findOneBy({ email });
    if (foundUser) {
        res.status(200).send(foundUser);
    }
    else {
        const newUser = new user_1.default();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        console.log('typeORMDB? ', typeORMDB);
        // await typeORMDB.manager.transaction(async () => {
        const savedUser = await (0, typeOrm_1.useTypeORM)(user_1.default).save(newUser);
        res.status(201).send(savedUser);
        // });
    }
});
controller.get("/", async (res) => {
    const users = await (0, typeOrm_1.useTypeORM)(user_1.default).find();
    res.send(users);
});
controller.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(400)
            .send({
            message: 'Required parameter "id" is missing!',
            statusCode: 400,
        });
    }
    const existingUser = await (0, typeOrm_1.useTypeORM)(user_1.default).findOneBy({ id });
    if (!existingUser) {
        return res
            .status(404)
            .send({
            message: `User with id: ${id} was not found.`,
            statusCode: 400,
        });
    }
    res.send(existingUser);
});
controller.put("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(400)
            .send({ message: 'Required parameter "id" is missing!' });
    }
    const existingUser = await (0, typeOrm_1.useTypeORM)(user_1.default).findOneBy({ id });
    if (!existingUser) {
        return res
            .status(404)
            .send({ message: `User with id: ${id} was not found.` });
    }
    const changes = req.body;
    const userChanges = { ...existingUser, ...changes };
    await typeORMDB.manager.transaction(async () => {
        const updatedUser = await (0, typeOrm_1.useTypeORM)(user_1.default).save(userChanges);
        res.send(updatedUser);
    });
});
controller.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(400)
            .send({ message: 'Required parameter "id" is missing!' });
    }
    const existingUser = await (0, typeOrm_1.useTypeORM)(user_1.default).findOneBy({ id });
    if (!existingUser) {
        return res
            .status(404)
            .send({ message: `User with id: ${id} was not found.` });
    }
    await typeORMDB.manager.transaction(async () => {
        await (0, typeOrm_1.useTypeORM)(user_1.default).remove(existingUser);
        res.send({ message: "User removed!" });
    });
});
exports.default = controller;
