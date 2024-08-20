import { Request, } from "express";

export default interface PostUserRequest extends Request {
	password: string,
	firstName: string;
	lastName: string;
	email: string;
}
