import { Router, Request, Response } from "express";
import { useTypeORM } from "../databases/postgres/typeOrm";
import UserEntity from "../databases/postgres/entities/user";
import { DataSource, ObjectLiteral } from "typeorm";
import PostUserRequest from "../databases/postgres/models/PostUserRequest";
import ErrorObject from "../databases/postgres/models/ErrorObject";

let typeORMDB: DataSource;
const controller = Router();

controller.post(
  "/",
  async (
    req: Omit<Request, "body"> & { body: PostUserRequest },
    res: Response<UserEntity | ErrorObject>
  ) => {
    const newUser = new UserEntity();
    const { firstName, lastName } = req.body;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    await typeORMDB.manager.transaction(async () => {
      const savedUser = await useTypeORM(UserEntity).save(newUser);
      res.status(201).send(savedUser);
    });
  }
);

controller.post(
  "/getOrCreateUserByEmail",
  async (
    req: Omit<Request, "body"> & { body: PostUserRequest },
    res: Response<ObjectLiteral | ErrorObject>
  ) => {

    const { firstName, lastName, email } = req.body;

    const foundUser = await useTypeORM(UserEntity).findOneBy({ email });
    if (foundUser) {
      res.status(200).send(foundUser);
    } else {

      const newUser = new UserEntity();
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.email = email;
      console.log('typeORMDB? ', typeORMDB);

      // await typeORMDB.manager.transaction(async () => {
      const savedUser = await useTypeORM(UserEntity).save(newUser);
      res.status(201).send(savedUser);
      // });
    }
  }
);

controller.get(
  "/",
  async (res: Response<ObjectLiteral[]>) => {
    const users = await useTypeORM(UserEntity).find();
    res.send(users);
  });

controller.get(
  "/:id",
  async (req: Request, res: Response<ObjectLiteral | ErrorObject>) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .send({
          message: 'Required parameter "id" is missing!',
          statusCode: 400,
        });
    }

    const existingUser = await useTypeORM(UserEntity).findOneBy({ id });

    if (!existingUser) {
      return res
        .status(404)
        .send({
          message: `User with id: ${id} was not found.`,
          statusCode: 400,
        });
    }

    res.send(existingUser);
  }
);

controller.put(
  "/:id",
  async (req: Request, res: Response<ObjectLiteral | ErrorObject>) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .send({ message: 'Required parameter "id" is missing!' });
    }

    const existingUser = await useTypeORM(UserEntity).findOneBy({ id });

    if (!existingUser) {
      return res
        .status(404)
        .send({ message: `User with id: ${id} was not found.` });
    }

    const changes: Partial<UserEntity> = req.body;
    const userChanges = { ...existingUser, ...changes };
    await typeORMDB.manager.transaction(async () => {
      const updatedUser = await useTypeORM(UserEntity).save(userChanges);
      res.send(updatedUser);
    });
  }
);

controller.delete(
  "/:id",
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .send({ message: 'Required parameter "id" is missing!' });
    }

    const existingUser = await useTypeORM(UserEntity).findOneBy({ id });

    if (!existingUser) {
      return res
        .status(404)
        .send({ message: `User with id: ${id} was not found.` });
    }

    await typeORMDB.manager.transaction(async () => {
      await useTypeORM(UserEntity).remove(existingUser);
      res.send({ message: "User removed!" });
    });
  });

export default controller;
