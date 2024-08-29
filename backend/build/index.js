"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const init_1 = __importDefault(require("./startup/init"));
const router_1 = __importDefault(require("./startup/router"));
const express_session_1 = __importDefault(require("express-session"));
const passportConfig_1 = __importDefault(require("./startup/passportConfig"));
const app = (0, express_1.default)();
// Middleware Setup
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Configure session middleware with your secret
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }, // Secure cookies in production
}));
// Initialize Passport and session support
app.use(passportConfig_1.default.initialize());
app.use(passportConfig_1.default.session());
// Application Setup
void (0, init_1.default)(app); // Initialize DB connection and start server
(0, router_1.default)(app); // Set up routes
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
