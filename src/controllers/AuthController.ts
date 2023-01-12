import { APIResponse } from "../models/APIResponse";
import { Configs } from '../config/Config';
import * as jwt from 'jsonwebtoken';
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import Joi from 'joi'
import { UserCreationParams, UsersService } from "../Services/UsersService";
import { User } from "../interface/User";
import { UserSchema } from "../schemas/UserSchema";
import { StatusCode } from "../interface/common/StatusCode";
const _CONFIGS = new Configs();
interface PingResponse {
  message: string;
}

@Route("auth")
export class AuthController extends Controller {
  @Post("/login")
  public async login(): Promise<PingResponse> {
    return {
      message: "successfull",
    };
  };
  @Post("/change-password")
  public async changePassword(): Promise<PingResponse> {
    return {
      message: "change password",
    };
  };
  
  @Post("/register")
  public async register(
    @Body() requestBody: User
  ): Promise<APIResponse<any>> {

    const { value, error } = UserSchema.validate(requestBody);
    const valid = error == null;
    if (!valid) {
      return new APIResponse<Joi.ValidationError>(error,StatusCode.BadRequest);
    } else {

      new UsersService().create(requestBody);

      //Create token
      const token = jwt.sign(
        requestBody,
        _CONFIGS.JWT.secret,
        {
          expiresIn: _CONFIGS.JWT.expiresIn,
          audience: _CONFIGS.JWT.audience,
          subject: _CONFIGS.JWT.subject,
        }
      );
      return new APIResponse<User>({
        ...requestBody,
        token: token
      },StatusCode.Created);
    }
  }
}