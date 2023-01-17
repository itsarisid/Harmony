import { RegisterDto } from './../dtos/UserDTO';
import { APIResponse } from "../models/APIResponse";
import { Configs } from '../config/Config';
import { Body, Controller, Post, Route, } from "tsoa";
import Joi from 'joi'
import { UsersService } from "../Services/UsersService";
import { UserSchema, LoginSchema } from "../schemas/UserSchema";
import { StatusCode } from "../interface/common/StatusCode";
import { LoginDto } from '../dtos/AuthDTO';
const _CONFIGS = new Configs();
interface PingResponse {
  message: string;
}

@Route("auth")
export class AuthController extends Controller {
  @Post("/login")
  public async login(
    @Body() requestBody: LoginDto
  ): Promise<any> {
    const { value, error } = LoginSchema.validate(requestBody);
    const valid = error == null;
    if (!valid) {
      return new APIResponse<Joi.ValidationError>(error, StatusCode.BadRequest);
    } else {
      const _services = new UsersService();
      return await _services.login(requestBody).then(x=>x);
    }
  };

  @Post("/change-password")
  public async changePassword(): Promise<PingResponse> {
    return {
      message: "change password",
    };
  };

  @Post("/register")
  public async register(
    @Body() requestBody: RegisterDto
  ): Promise<APIResponse<any>> {

    const { value, error } = UserSchema.validate(requestBody);
    const valid = error == null;
    if (!valid) {
      return new APIResponse<Joi.ValidationError>(error, StatusCode.BadRequest);
    } else {
      const _services = new UsersService();
      return await _services.create(requestBody);
    }
  }
}