"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = (0, express_1.Router)();
controller.get("/", (req, res) => {
    return res.send("hello bitch");
});
controller.get("/:id", (req, res) => {
    return res.send("get by id");
});
controller.post("/", (req, res) => {
    return res.send("post");
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
