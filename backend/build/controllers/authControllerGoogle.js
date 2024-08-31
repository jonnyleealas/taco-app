"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
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
// Will need to create sign up controller and remove this post request from here
controller.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // Function to validate password
    const validatePasswordLength = (password) => {
        const isValidLength = password.length >= 8; // Checks for minimum length
        return isValidLength;
    };
    const validatePasswordSpaces = (password) => {
        const noBlankEdges = password.trim() === password; // Ensures no leading/trailing spaces
        const noSpaces = !/\s/.test(password); // Ensures there are no spaces at all
        return noBlankEdges && noSpaces;
    };
    if (!validatePasswordLength(password) && !validatePasswordSpaces(password)) {
        return res.status(400).json({
            error: "Password must be at least 8 characters long, and cannot contain any blank spaces."
        });
    }
    // Validate the password
    if (!validatePasswordLength(password)) {
        return res.status(400).json({
            error: "Password must be at least 8 characters long."
        });
    }
    // Validate if password has spaces
    if (!validatePasswordSpaces(password)) {
        return res.status(400).json({
            error: "Cannot contain any blank spaces."
        });
    }
    const hash = await bcrypt_1.default.hash(password, 10);
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
            password: hash,
        });
        await newUser.save();
        return res.status(201).json(newUser);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred while creating the user");
    }
});
// GET /api/v1/auth/google - Initiates Google OAuth login
controller.get('/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
// GET /api/v1/auth/google/callback - Google OAuth callback route
controller.get('/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication, redirect home or wherever you want
    res.redirect('http://localhost:3000');
});
// GET /api/v1/auth/google/failure - Handles Google OAuth failures
controller.get('/google/failure', (req, res) => {
    res.status(401).json({ message: 'Google Authentication Failed' });
});
exports.default = controller;
