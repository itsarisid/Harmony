import { Get, Route, Security } from "tsoa";
import {APIResponse} from '../models/APIResponse'
import { UserSchema } from "../schemas/UserSchema";
import Joi from 'joi'


@Route("ping")
export class PingController {
  @Security("jwt", ["admin"])
  @Get("/")
  public async getMessage(): Promise<APIResponse<string>> {
    return new APIResponse<string>("This is ping pon");
  }
  @Get("/pong")
  public async validateJOI(): Promise<APIResponse<any>> {
   const result =  UserSchema.validate({
        email: "sajid@khan.com",
        name: "Sajid Khan",
        password: ""
      }); 
    const { value, error } = result; 
    const valid = error == null; 
    if (!valid) { 
      return new APIResponse<Joi.ValidationError>(error); 
    } else { 
      return new APIResponse<string>("This is ping pon");
    } 
  }
}

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
