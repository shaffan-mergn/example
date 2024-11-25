export class UserModel {
	name: string;
	email: string;
	age: number;
}

export class CreateUserModel extends UserModel {}

export class UpdateUserModel extends UserModel {}
