import {
	IsNotEmpty,
	IsString,
	IsEmail,
	MaxLength,
	IsNumber,
	Min,
	Max,
} from "class-validator";
import { APP_MESSAGES } from "../definitions/constants";

export class UserDto {
	@IsNotEmpty()
	@IsEmail({}, { message: APP_MESSAGES.USER.ERROR_INVALID_EMAIL })
	@MaxLength(100)
	email: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(100)
	name: string;

	@IsNotEmpty()
	@IsNumber()
	@Min(0)
	@Max(200)
	age: number;
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends UserDto {
	@IsNotEmpty()
	@IsNumber()
	id: number;
}
