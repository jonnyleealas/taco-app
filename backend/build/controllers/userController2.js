"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = (0, express_1.Router)();
controller.get("/", (req, res) => {
    return res.send("hello bitch");
});
exports.default = controller;
