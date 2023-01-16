import { StatusCode } from './../interface/common/StatusCode';
import { APIResponse } from '../models/APIResponse';
import { IUser } from "../interface/IUser";
import bcrypt from 'bcryptjs'
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
  // private _user: IUser;
  // constructor(user: IUser) {
  //   this._user = user;
  // }

  public get(id: number, name?: string): IUser {
    return {
      email: "sajid@khan.com",
      name: name ?? "Sajid Khan",
      password: "123456",
      phoneNumber: "",
      token: "",
      timestamps: {}
    };
  }

  public async create(params: UserCreationParams): Promise<APIResponse<any>> {

    return new APIResponse<string>("", StatusCode.BadRequest);
  }
}