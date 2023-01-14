import { StatusCode } from './../interface/common/StatusCode';
import { APIResponse } from './../models/APIResponse';
import { IUser } from "../interface/IUser";
import client from './../config/db';
import bcrypt from 'bcryptjs'
import { User } from "../db/User";
import mongoose from "mongoose";
import * as jwt from 'jsonwebtoken';
import { Configs } from '../config/Config';

const _CONFIGS = new Configs();
// A post request should not contain an id.
export type UserCreationParams = Pick<IUser,
  "email"
  | "name"
  | "password"
  | "phoneNumber"
>;

export class UsersService {
  public get(id: number, name?: string): IUser {
    return {
      email: "sajid@khan.com",
      name: name ?? "Sajid Khan",
      password: "123456",
      phoneNumber: "",
      token: ""
    };
  }

  public async create(params: UserCreationParams): Promise<APIResponse<any>> {
    const uri = `mongodb+srv://${_CONFIGS.dbCredentials.username}:${_CONFIGS.dbCredentials.password}@harmony.8w14cgj.mongodb.net/Harmony?retryWrites=true&w=majority`;
    mongoose.connect(uri);
    const user: any = await User.findOne({ email: 'sajid@khan.com' });
    console.log(1, user);
    return new APIResponse<IUser>(user, StatusCode.BadRequest);
  }
}