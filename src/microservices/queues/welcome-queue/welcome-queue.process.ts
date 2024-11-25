import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { QUEUES } from "src/common/definitions/enums";

/**
 * Consumer for welcome-queue to process each job for welcome
 */

@Processor(QUEUES.WELCOME_QUEUE)
export class WelcomeQueueProcess {
	constructor() {}

	@Process()
	async sendEmail(job: Job) {
		await job.progress(20);
		/**
		 * service to send the user welcome message this can be email and also push service
		 */
		await job.progress(100);
	}
}
