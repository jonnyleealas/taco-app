import { Request, } from "express";

export default interface PostUserRequest extends Request {
	firstName: string;
	lastName: string;
}
