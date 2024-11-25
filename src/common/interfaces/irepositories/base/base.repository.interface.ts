import { DeleteResult, FindManyOptions, FindOneOptions } from 'typeorm';

export interface IBaseRepository<T> {
  findOne(options: FindOneOptions<T>): Promise<T>;
  findAll(options: FindManyOptions<T>): Promise<T[]>;
  create(payload: T): Promise<T>;
  update(payload: T): Promise<T>;
  delete(id: number): Promise<DeleteResult>;
}
