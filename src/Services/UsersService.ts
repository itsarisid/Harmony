import "reflect-metadata"
import { StatusCode } from './../interface/common/StatusCode';
import { APIResponse } from '../models/APIResponse';
import { IUser } from "../interface/IUser";
import bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken';
import { Configs } from '../config/Config';
import { AppDataSource } from "../core/DataSource"
import { User } from '../core/entities/User';

const _CONFIGS = new Configs();
// A post request should not contain an id.
export type UserCreationParams = Pick<IUser,
  "email"
  | "name"
  | "password"
  | "profilePhoto"
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
      profilePhoto: "",
      token: ""
    };
  }

  public async create(params: UserCreationParams): Promise<APIResponse<any>> {

    // get entity repositories
    const _repository = AppDataSource.getRepository(User)

    const isExist = await AppDataSource.manager.findOne(User, {
      where: {
        email: params.email,
      },
    });
    console.log(params);
    if (isExist) {
      return new APIResponse<string>("User Exist", StatusCode.BadRequest);
    }

    const user = new User();
    user.email = params.email;
    user.name = params.name;

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(params.password || _CONFIGS.defaultPassword, 10).then(x => x);
    user.password = encryptedPassword;

    // Save in Db
    await _repository.save(user);

    //Create token
    const token = jwt.sign(
      params,
      _CONFIGS.JWT.secret,
      {
        expiresIn: _CONFIGS.JWT.expiresIn,
        audience: _CONFIGS.JWT.audience,
        subject: _CONFIGS.JWT.subject,
      }
    );
    return new APIResponse<IUser>({
      ...params,
      token: token
    }, StatusCode.Created);
  }
}