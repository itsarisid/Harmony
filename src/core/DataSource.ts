import "reflect-metadata"
import { DataSource } from "typeorm"

import { Configs } from '../config/Config';
const _CONFIGS = new Configs();

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: _CONFIGS.dbCredentials.name || "Harmony",
    url: "mongodb+srv://sajid:1qazxsw23edc@harmony.8w14cgj.mongodb.net/?retryWrites=true&w=majority",
    synchronize: true,
    logging: false,
    useUnifiedTopology: true,
    entities: ["./src/core/entities/**/*.ts"],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
.then(() => {
    console.log(`Data Source has been initialized`);
})
.catch((err) => {
    console.error(`Data Source initialization error`, err);
});
