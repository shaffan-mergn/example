import { IBaseRepository } from 'src/common/interfaces/irepositories/base/base.repository.interface';
import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(private readonly repo: Repository<T>) {}
  async findAll(options: FindManyOptions<T>): Promise<T[]> {
    return this.repo.find(options);
  }

  async findOne(options: FindOneOptions<T>): Promise<T> {
    return this.repo.findOne(options);
  }

  async create(payload: T): Promise<T> {
    const instance = await this.repo.create(payload);
    return this.repo.save(instance);
  }

  async update(payload: T): Promise<T> {
    return this.repo.save(payload);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
