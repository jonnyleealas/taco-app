"use strict";
// import express from "express";
// import appSetup from "./startup/init";
// import routerSetup from "./startup/router";
// import securitySetup from "./startup/security";
// import dotenv from "dotenv";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app = express();
// void appSetup(app);
// securitySetup(app, express);
// routerSetup(app);
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const init_1 = __importDefault(require("./startup/init"));
const router_1 = __importDefault(require("./startup/router"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware Setup
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Configure session middleware
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));
// Initialize Passport and session support
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Application Setup
void (0, init_1.default)(app); // Initialize DB connection and start server
(0, router_1.default)(app); // Set up routes
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
