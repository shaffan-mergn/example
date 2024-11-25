import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { WelcomeQueueProcess } from "./welcome-queue.process";
import { QUEUES } from "src/common/definitions/enums";
import { WelcomeQueueService } from "./welcome-queue.service";

const queue = [
	BullModule.registerQueue({
		name: QUEUES.WELCOME_QUEUE,
	}),
];

@Module({
	imports: [...queue],
	providers: [WelcomeQueueProcess, WelcomeQueueService],
	exports: [WelcomeQueueService],
})
export class WelcomeQueueModule {}
