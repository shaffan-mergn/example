import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateUserDto, UserDto } from "src/common/dtos/user.dto";
import { UserService } from "./user.service";
import { User } from "src/common/entities/user/user.entity";
import { APP_MESSAGES } from "src/common/definitions/constants";
import { ResponseMessageMetadata } from "src/common/decorators/response-message.decorator";
import { IUserService } from "src/common/interfaces/iservices/user.service.interface";

@Controller("user")
export class UserController {
	constructor(@Inject("IUserService") private userService: IUserService) {}

	@Post()
	@ResponseMessageMetadata(APP_MESSAGES.USER.CREATED)
	saveUser(@Body() userDto: CreateUserDto) {
		return this.userService.create(userDto);
	}

	@Get()
	@ResponseMessageMetadata(APP_MESSAGES.USER.FETCHED_ALL)
	getAllUsers() {
		return this.userService.getAll({});
	}
}
