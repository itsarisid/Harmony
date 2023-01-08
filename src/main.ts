import { Configs } from './config/config';
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import { RegisterRoutes } from './routes/routes';
import { ValidateError } from "tsoa";
const config = new Configs();

const app: Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

RegisterRoutes(app);

app.listen(config.PORT, () => {
  console.log("Server is running on port", config.PORT);
});