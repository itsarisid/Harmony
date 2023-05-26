import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
    ManyToMany,
    OneToOne
} from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity()
export class User extends BaseEntity {

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profilePhoto: string;
}