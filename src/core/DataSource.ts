import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import { Post } from "./entity/Post"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "test",
    url:"mongodb+srv://sajid:1qazxsw23edc@harmony.8w14cgj.mongodb.net/?retryWrites=true&w=majority",
    synchronize: true,
    logging: false,
    entities: [Post,Category],
    migrations: [],
    subscribers: [],
})
