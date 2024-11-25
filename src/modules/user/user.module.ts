import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRepository } from "src/common/repositories/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/common/entities/user/user.entity";
import { UserController } from "./user.controller";
import { WelcomeQueueService } from "src/microservices/queues/welcome-queue/welcome-queue.service";
import { WelcomeQueueModule } from "src/microservices/queues/welcome-queue/welcome-queue.module";

@Module({
	imports: [TypeOrmModule.forFeature([User]), WelcomeQueueModule],
	controllers: [UserController],
	providers: [
		{
			provide: "IUserService",
			useClass: UserService,
		},
		{
			provide: "IUserRepository",
			useClass: UserRepository,
		},
	],
	exports: ["IUserService"],
})
export class UserModule {}
