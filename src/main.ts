import { Configs } from './config/config';
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import * as cors from "cors";
import { RegisterRoutes } from './routes/routes';
import { ValidateError } from "tsoa";
import bodyParser from 'body-parser';
import { ApplicationError } from './middleware/ApplicationError';
import { APIResponse } from './models/apiResponse';
const config = new Configs();

// Initialize the app.
const app: Application = express();

// Error handling Middleware function reads the error message 
// and sends back a response in JSON format  
const errorHandler = (
  error: ApplicationError,
  request: Request,
  response: Response,
  next: NextFunction) => {
  response.header("Content-Type", 'application/json')

  const status = error.statusCode || 400
  response.status(status).json(new APIResponse<ApplicationError>(error,error.message, error.stack))
}
// Call midlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
//app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

RegisterRoutes(app);
app.use(errorHandler);



app.listen(config.PORT, () => {
  console.log("Server is running on port", config.PORT);
});