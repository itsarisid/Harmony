import { Configs } from './config/Config';
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { RegisterRoutes } from './routes/routes';
import { ValidateError } from "tsoa";
import bodyParser from 'body-parser';
import { ApplicationError } from './middleware/ApplicationError';
import { APIResponse } from './models/APIResponse';
import methodOverride from 'method-override';
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

  const status = error.statusCode || 500
  let message = "Oopsie Woopsie! Something Broken."
  response.status(status).json(new APIResponse<ApplicationError>(error, status,error.stack))
}
// Call midlewares
app.use(morgan("tiny"));
app.use(express.static("public"));
//app.use(helmet({ contentSecurityPolicy: false }));
//app.use(express.json({ limit: '100mb' }));
app.use(
  express.urlencoded({ limit: '100mb', extended: true }),
);

// add multiple cors options as per your use
app.use(cors({
  origin: [
    'http://localhost:8322/',
  ],
}));

app.use(bodyParser.json());
app.use(methodOverride());


RegisterRoutes(app);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log("Server is running on port", config.PORT);
});