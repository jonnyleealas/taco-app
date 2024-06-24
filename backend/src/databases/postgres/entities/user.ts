import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import UserInterface from "../models/user";
// I think this creates the psql table
@Entity("users")
export default class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;
}
