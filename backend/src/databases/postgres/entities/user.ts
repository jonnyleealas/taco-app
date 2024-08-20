import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";


// Entities are the structure of the posgres tables
@Entity("users")
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
// Column() tells type orm this is the column of the table
@Column()
  password!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;
}
