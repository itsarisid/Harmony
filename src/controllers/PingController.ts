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
