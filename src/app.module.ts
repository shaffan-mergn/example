import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/typeorm/typeorm.config";
import { UserModule } from "./modules/user/user.module";
import { HelperModule } from "./common/helpers/helper.module";
import { EnvironmentModule } from "./config/environment/environment.module";

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRoot(TypeOrmConfig),
		HelperModule,
		EnvironmentModule,
	],
})
export class AppModule {}
