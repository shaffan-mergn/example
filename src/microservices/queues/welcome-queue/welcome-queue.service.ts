import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { queuePool } from "../bull-board-queue";
import { QUEUES } from "src/common/definitions/enums";

@Injectable()
export class WelcomeQueueService {
	constructor(@InjectQueue(QUEUES.WELCOME_QUEUE) readonly queue: Queue) {
		queuePool.add(queue);
	}

	addJobInQueue(data: any) {
		return this.queue.add(data);
	}
}
