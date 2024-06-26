import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";

let typeORMDB: DataSource;

export default async function typeORMConnect(): Promise<void> {

  // DataSource establishes our database connection
  const dataSource = new DataSource({
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
export function useTypeORM(
  entity: EntityTarget<ObjectLiteral>): Repository<ObjectLiteral> {

  if (!typeORMDB) {
    throw new Error("TypeORM has not been initialized!");
  }

  return typeORMDB.getRepository(entity);
}
