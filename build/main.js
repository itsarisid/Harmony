"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const express_1 = __importDefault(require("express"));
const config = new config_1.Configs();
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
app.get("/test", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    db_1.default.connect((err, db) => __awaiter(void 0, void 0, void 0, function* () {
        const dbo = yield db.db("Harmony");
        if (err)
            throw err;
        dbo.collection("User").find({}).toArray(function (e, result) {
            if (e)
                throw e;
            console.log(result);
            db.close();
        });
    }));
    res.send({
        message: "Success",
    });
}));
app.get("/ping", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        message: "pong",
    });
}));
app.listen(config.PORT, () => {
    console.log("Server is running on port", config.PORT);
});
