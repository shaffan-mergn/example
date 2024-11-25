import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class User extends BaseEntity {
	@Column({ nullable: false })
	name: string;

	@Column({ unique: true, nullable: false })
	email: string;

	@Column({ nullable: false })
	age: number;
}
