import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/typeorm/typeorm.config";
import { UserModule } from "./modules/user/user.module";
import { EnvironmentModule } from "./config/environment/environment.module";
import { MicroservicesModule } from "./microservices/microservices.module";
import { WelcomeQueueModule } from "./microservices/queues/welcome-queue/welcome-queue.module";

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRoot(TypeOrmConfig),
		EnvironmentModule,
		MicroservicesModule,
		WelcomeQueueModule,
	],
})
export class AppModule {}
