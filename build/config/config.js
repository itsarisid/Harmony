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
        this.JWT = {
            secret: process.env.SECRET_KEY || "HARMONY",
            audience: process.env.AUDIENCE || "www.arisid.com",
            issuer: process.env.ISSUER || "Harmony",
            expiresIn: process.env.EXPIRE_IN || "1h",
            subject: process.env.SUBJECT || "Harmony App",
        };
    }
}
exports.Configs = Configs;
