"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const tsoa_1 = require("tsoa");
const apiResponse_1 = require("./../models/apiResponse");
let PingController = class PingController {
    getMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(Buffer.from("Hello World").toString('base64'));
            return new apiResponse_1.APIResponse("This is ping pon");
        });
    }
};
__decorate([
    (0, tsoa_1.Security)("jwt", ["admin"]),
    (0, tsoa_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PingController.prototype, "getMessage", null);
PingController = __decorate([
    (0, tsoa_1.Route)("ping")
], PingController);
exports.PingController = PingController;
//   import client from './config/db';
// import article from './config/databse';
// app.get("/test", async (_req, res) => {
//     client.connect(async (err: any, db: any) => {
//         const dbo = await db.db("Harmony");
//         if (err) throw err;
//         dbo.collection("User").find({}).toArray(function (e: any, result: any) {
//             if (e) throw e;
//             console.log(result);
//             db.close();
//         });
//     });
//     res.send({
//         message: "Success",
//     });
// });
// app.get("/get-blog", async (_req, res) => {
//   client.connect(async (err: any, db: any) => {
//       const dbo = await db.db("Harmony");
//       if (err) throw err;
//       dbo.collection("blogs").find({}).toArray(function (e: any, result: any) {
//           if (e) throw e;
//           console.log();
//           res.send(result);
//           db.close();
//       });
//   });
// });
// app.get("/article", async (_req, res) => {
//   // Insert the article in our MongoDB database
//   article.save();
//     res.send({
//         message: "pong",
//     });
// });
