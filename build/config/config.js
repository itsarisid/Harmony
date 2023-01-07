"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Configs {
    constructor() {
        this.dbCredentials = {
            username: process.env.USER_NAME,
            password: process.env.PASSWORD
        };
        this.PORT = process.env.PORT || 8322;
    }
}
exports.Configs = Configs;
