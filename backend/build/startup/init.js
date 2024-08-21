"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeOrm_1 = __importDefault(require("../databases/postgres/typeOrm")); // Database connection function
const authController_1 = __importDefault(require("./controllers/authController")); // Authentication routes
const userController_1 = __importDefault(require("./controllers/userController")); // User routes
// Initialize environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express_1.default.urlencoded({ extended: true }));
const appSetup = async (app) => {
    // Set up database connections
    try {
        await Promise.all([
            (0, typeOrm_1.default)(),
        ]);
        console.log('Databases connected successfully!');
        // Set up routes
        app.use('/api/v1/auth', authController_1.default); // Auth routes
        app.use('/api/v1/users', userController_1.default); // User routes
        const APP_PORT = Number(process.env.APP_PORT) || 3000;
        app.listen(APP_PORT, () => {
            console.log(`Server started on port ${APP_PORT}`);
        });
    }
    catch (error) {
        console.log('Unable to start the app!');
        console.error(error);
    }
};
// Run the setup
appSetup(app);
exports.default = app;
