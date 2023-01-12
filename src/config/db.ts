
const { MongoClient, ServerApiVersion } = require('mongodb');
import { Configs } from "./Config";
const config = new Configs();
const uri = `mongodb+srv://${config.dbCredentials.username}:${config.dbCredentials.password}@harmony.8w14cgj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
export default client;
