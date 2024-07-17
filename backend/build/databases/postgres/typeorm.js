"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = typeORMConnect;
exports.useTypeORM = useTypeORM;
const typeorm_1 = require("typeorm");
let typeORMDB;
async function typeORMConnect() {
    // DataSource establishes our database connection
    const dataSource = new typeorm_1.DataSource({
        type: "postgres",
        url: process.env.PGSQL_URI,
        entities: [
            `${__dirname}/entities/*.ts`
        ],
        synchronize: true,
    });
    typeORMDB = await dataSource.initialize();
}
// Executes TypeORM query for the provided entity model
function useTypeORM(entity) {
    if (!typeORMDB) {
        throw new Error("TypeORM has not been initialized!");
    }
    return typeORMDB.getRepository(entity);
}
