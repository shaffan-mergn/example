export enum EnvironmentType {
	Development = "development",
	Production = "production",
	Local = "local",
	Test = "test",
}

export enum DatabaseType {
	Postgres = "postgres",
}

export const QUEUES = {
	WELCOME_QUEUE: "welcome-queue",
	PROCESS: {
		WELCOME_QUEUE: "welcome-queue-process",
	},
	COMPLETED_JOBS_LIMIT: {
		NCE_ALARMS_QUEUE: 150000,
		NCE_TRANSFORMED_ALARMS_QUEUE: 10000,
		OBSERVIUM_ALERTS_QUEUE: 150000,
		OBSERVIUM_TRANSFORMED_ALERTS_QUEUE: 10000,
	},
};
