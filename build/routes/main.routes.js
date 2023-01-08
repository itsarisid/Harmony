"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRouts = void 0;
const ping_routes_1 = __importDefault(require("./ping.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
class AllRouts {
    constructor() {
        this.pingRouter = ping_routes_1.default;
        this.userRouter = user_routes_1.default;
    }
}
exports.AllRouts = AllRouts;
