import express from "express";
import appSetup from "./startup/init";
import routerSetup from "./startup/router";
import securitySetup from "./startup/security";
import dotenv from "dotenv";

dotenv.config();

const app = express();

void appSetup(app);
securitySetup(app, express);
routerSetup(app);
