"use strict";
// import { Express } from 'express';
// import typeORMConnect from '../databases/postgres/typeOrm';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeOrm_1 = __importDefault(require("../databases/postgres/typeOrm"));
const appSetup = async (app) => {
    try {
        await (0, typeOrm_1.default)();
        console.log('Databases connected successfully!');
        // Note: Do not start the server here; it's handled elsewhere.
    }
    catch (error) {
        console.log('Unable to start the app!');
        console.error(error);
    }
};
exports.default = appSetup;
