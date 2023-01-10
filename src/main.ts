import { Configs } from './config/config';
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import * as helmet from "helmet";
import * as cors from "cors";
import { RegisterRoutes } from './routes/routes';
import { ValidateError } from "tsoa";
const config = new Configs();

// Initialize the app.
const app: Application = express();

// Call midlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
//  app.use(cors());
//  app.use(helmet());
//  app.use(bodyParser.json());

RegisterRoutes(app);

app.listen(config.PORT, () => {
  console.log("Server is running on port", config.PORT);
});