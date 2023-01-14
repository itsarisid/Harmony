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
import { IUser } from "../interface/IUser";
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
    //   bcrypt.compare(password, hashedPassword, 
    //     async function (err, isMatch) {

    //     // Comparing the original password to
    //     // encrypted password   
    //     if (isMatch) {
    //         console.log('Encrypted password is: ', password);
    //         console.log('Decrypted password is: ', hashedPassword);
    //     }

    //     if (!isMatch) {

    //         // If password doesn't match the following
    //         // message will be sent
    //         console.log(hashedPassword + ' is not encryption of ' 
    //         + password);
    //     }
    // })
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
    @Body() requestBody: IUser
  ): Promise<APIResponse<any>> {

    const { value, error } = UserSchema.validate(requestBody);
    const valid = error == null;
    if (!valid) {
      return new APIResponse<Joi.ValidationError>(error, StatusCode.BadRequest);
    } else {
      const _services = new UsersService();
      let res = await _services.create(requestBody);
      console.log(3,res);
      return res;
      //console.log(a);
      //return new APIResponse<any>(a);
      // if (result == StatusCode.BadRequest) {
      //   return result;
      // } else {
      //   //Create token
      //   const token = jwt.sign(
      //     requestBody,
      //     _CONFIGS.JWT.secret,
      //     {
      //       expiresIn: _CONFIGS.JWT.expiresIn,
      //       audience: _CONFIGS.JWT.audience,
      //       subject: _CONFIGS.JWT.subject,
      //     }
      //   );
      //   return new APIResponse<IUser>({
      //     ...requestBody,
      //     token: token
      //   }, StatusCode.Created);
      // }
    }
  }
}