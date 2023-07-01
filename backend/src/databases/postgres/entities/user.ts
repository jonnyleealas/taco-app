import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import UserInterface from "../models/user";

@Entity()
export class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  password!: string;
}
