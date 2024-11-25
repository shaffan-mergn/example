import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/common/entities/user/user.entity";
import { IUserRepository } from "src/common/interfaces/irepositories/user.repository.interface";
import { IUserService } from "src/common/interfaces/iservices/user.service.interface";
import { BaseService } from "src/common/services/base/base.service";
import { FindOneOptions } from "typeorm";

@Injectable()
export class UserService extends BaseService<User> implements IUserService {
	constructor(
		@Inject("IUserRepository") private readonly userRepo: IUserRepository
	) {
		super(userRepo);
	}

	getUserById(userId: number) {
		const options: FindOneOptions<User> = {
			where: {
				id: userId,
			},
		};
		return this.getOne(options);
	}
}
