import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import UserInterface from "../models/user";

@Entity("users")
export default class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
}
