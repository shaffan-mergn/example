import { DeleteResult, FindManyOptions, FindOneOptions } from "typeorm";

export interface IBaseService<T> {
	getAll(options: FindManyOptions<T>): Promise<T[]>;
	getOne(options: FindOneOptions<T>): Promise<T>;
	create(payload: Partial<T>): Promise<T>;
	update(payload: T): Promise<T>;
	delete(id: number): Promise<DeleteResult>;
}
