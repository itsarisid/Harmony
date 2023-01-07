"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { MongoClient, ServerApiVersion } = require('mongodb');
const config_1 = require("./config");
const config = new config_1.Configs();
const uri = `mongodb+srv://${config.dbCredentials.username}:${config.dbCredentials.password}@harmony.8w14cgj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
exports.default = client;
