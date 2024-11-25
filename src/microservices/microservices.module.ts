import { Global, Module } from "@nestjs/common";
import { BullQueuesModule } from "./queues/bull-queues.module";

@Global()
@Module({
	imports: [BullQueuesModule],
})
export class MicroservicesModule {}
