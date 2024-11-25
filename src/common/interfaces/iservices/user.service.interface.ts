import { IBaseService } from './base/base.service.interface';
import { User } from 'src/common/entities/user/user.entity';

export interface IUserService extends IBaseService<User> {}
