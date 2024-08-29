"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
const authController_1 = __importDefault(require("../controllers/authController"));
const homeController_1 = __importDefault(require("../controllers/homeController"));
const authControllerGoogle_1 = __importDefault(require("../controllers/authControllerGoogle"));
const routerSetup = (app) => {
    // Setup a basic route
    app.get('/', async (req, res) => {
        res.send('Hello world!');
    });
    // Setup routes for userController2
    app.use('/api/v1/users', userController_1.default);
    // Setup routes for authController
    app.use('/api/v1/auth', authController_1.default);
    // Home Controller
    app.use('/api/v1/home', homeController_1.default);
    // Google auth controller
    app.use('/api/v1/auth/google', authControllerGoogle_1.default);
};
exports.default = routerSetup;
