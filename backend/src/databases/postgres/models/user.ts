import { BaseEntity } from "typeorm";

export default interface UserInterface extends BaseEntity{
	id: number;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
  }
f