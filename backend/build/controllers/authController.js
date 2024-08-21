"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../databases/postgres/entities/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const controller = (0, express_1.Router)();
// POST /api/v1/login - Login route
controller.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await user_1.Person.findOneBy({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        // Compare the provided password with the stored hash
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        // Return success response
        return res.json({ message: 'Login successful' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send('An error occurred during login');
    }
});
// POST /api/v1/logout - Logout route (optional, depending on your session strategy)
controller.post('/logout', (req, res) => {
    // Here you could implement logic for logout if you use session-based authentication
    return res.json({ message: 'Logout successful' });
});
exports.default = controller;
