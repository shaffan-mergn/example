import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EnvironmentType } from "src/common/definitions/enums";

@Injectable()
export class EnvironmentService {
	constructor(private configService: ConfigService) {}

	getEnvironmentType(): EnvironmentType {
		return this.configService.get<EnvironmentType>("NODE_ENV");
	}

	getDatabaseType(): any {
		return this.configService.get<string>("DATABASE_TYPE");
	}

	getUrl(): string {
		return this.configService.get<string>("URL");
	}

	getSync(): boolean {
		return this.configService.get<boolean>("SYNC");
	}

	getLogging(): boolean {
		return this.configService.get<boolean>("LOGGING");
	}

	getDatabasePassword(): string {
		return this.configService.get<string>("DATABASE_PASSWORD");
	}

	getDatabaseName(): string {
		return this.configService.get<string>("DATABASE_NAME");
	}

	getDatabasePort(): number {
		return this.configService.get<number>("DATABASE_PORT");
	}

	getDatabaseUser(): string {
		return this.configService.get<string>("DATABASE_USERNAME");
	}

	getDatabaseHost(): string {
		return this.configService.get<string>("DATABASE_HOST");
	}

	getSchemaName(): string {
		return this.configService.get<string>("SCHEMA_NAME");
	}
}
