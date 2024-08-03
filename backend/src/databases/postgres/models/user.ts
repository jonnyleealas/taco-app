import { BaseEntity } from "typeorm";

export default interface UserInterface extends BaseEntity{
	id: number;
	firstName: string;
	lastName: string;
	email: string;
  }
