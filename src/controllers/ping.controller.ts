import { Get, Route } from "tsoa";

interface PingResponse {
  message: string;
}

@Route("ping")
export class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "hello",
    };
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
