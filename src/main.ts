import { Configs } from './config/config';
import express, { Application } from "express";
const config = new Configs();
import client from './config/db';
const app: Application = express();

app.get("/test", async (_req, res) => {
    client.connect(async (err:any, db:any) => {
        const dbo = await db.db("Harmony");
        if (err) throw err;
        dbo.collection("User").find({}).toArray(function(e:any, result:any) {
            if (e) throw e;
            console.log(result);
            db.close();
        });
      });
      res.send({
        message: "Success",
      });
  });

app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});


app.listen(config.PORT, () => {
  console.log("Server is running on port", config.PORT);
});