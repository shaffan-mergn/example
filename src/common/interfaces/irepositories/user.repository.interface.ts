import { User } from 'src/common/entities/user/user.entity';
import { IBaseRepository } from './base/base.repository.interface';

export interface IUserRepository extends IBaseRepository<User> {}
