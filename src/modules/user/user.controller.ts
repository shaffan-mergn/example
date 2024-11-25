import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateUserDto, UserDto } from "src/common/dtos/user.dto";
import { UserService } from "./user.service";
import { User } from "src/common/entities/user/user.entity";
import { APP_MESSAGES } from "src/common/definitions/constants";
import { ResponseMessageMetadata } from "src/common/decorators/response-message.decorator";
import { IUserService } from "src/common/interfaces/iservices/user.service.interface";
import { WelcomeQueueService } from "src/microservices/queues/welcome-queue/welcome-queue.service";

@Controller("user")
export class UserController {
	constructor(
		@Inject("IUserService") private userService: IUserService,
		private welcomeQueueService: WelcomeQueueService
	) {}

	@Post()
	@ResponseMessageMetadata(APP_MESSAGES.USER.CREATED)
	async saveUser(@Body() userDto: CreateUserDto) {
		const result = await this.userService.create(userDto);
		await this.welcomeQueueService.addJobInQueue(`Welcome ${result.email}`);
		return result;
	}

	@Get()
	@ResponseMessageMetadata(APP_MESSAGES.USER.FETCHED_ALL)
	getAllUsers() {
		return this.userService.getAll({});
	}
}
