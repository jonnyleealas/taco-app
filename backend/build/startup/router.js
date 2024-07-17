"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
const routerSetup = (app) => app.get("/", async (req, res) => {
    res.send("Hello world!");
})
    .use("/api/v1/users", userController_1.default);
exports.default = routerSetup;
