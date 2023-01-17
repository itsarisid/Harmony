import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

export default class BaseEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ type: 'date', default: Date.now()})
    createdAt: Date;

    @Column()
    createdBy:string;

    @Column()
    updatedAt:Date;

    @Column()
    updatedBy:string;
}
