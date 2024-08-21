"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeOrm_1 = __importDefault(require("../databases/postgres/typeOrm"));
const appSetup = async (app) => {
    try {
        await (0, typeOrm_1.default)();
        console.log('Databases connected successfully!');
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
exports.default = appSetup;
