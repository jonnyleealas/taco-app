"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = (0, express_1.Router)();
// POST /api/v1/login - Login route
controller.get('/home', async (req, res) => {
    res.send("<h1>Home</h1>");
});
// POST /api/v1/logout - Logout route (optional, depending on your session strategy)
controller.post('/logout', (req, res) => {
    // Here you could implement logic for logout if you use session-based authentication
    return res.json({ message: 'Logout successful' });
});
exports.default = controller;
