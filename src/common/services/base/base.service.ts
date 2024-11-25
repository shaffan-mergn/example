import { Injectable } from "@nestjs/common";
import { IBaseRepository } from "src/common/interfaces/irepositories/base/base.repository.interface";
import { IBaseService } from "src/common/interfaces/iservices/base/base.service.interface";
import { DeleteResult, FindManyOptions, FindOneOptions } from "typeorm";

@Injectable()
export class BaseService<T> implements IBaseService<T> {
	constructor(private readonly repo: IBaseRepository<T>) {}

	getAll(options: FindManyOptions<T>): Promise<T[]> {
		return this.repo.findAll(options);
	}

	getOne(options: FindOneOptions<T>): Promise<T> {
		return this.repo.findOne(options);
	}

	create(payload: T): Promise<T> {
		return this.repo.create(payload);
	}

	update(payload: T): Promise<T> {
		return this.repo.update(payload);
	}

	delete(id: number): Promise<DeleteResult> {
		return this.repo.delete(id);
	}
}
