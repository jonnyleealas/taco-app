import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import UserInterface from "../models/user";

// Entities are the structure of the posgres tables
@Entity("users")
export default class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id!: number;
// Column() tells type orm this is the column of the table
  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  favoriteColor!: string;
}
