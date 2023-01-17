import "reflect-metadata"
import { StatusCode } from './../interface/common/StatusCode';
import { APIResponse } from '../models/APIResponse';
import { IUser } from "../interface/IUser";
import bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken';
import { Configs } from '../config/Config';
import { AppDataSource } from "../core/DataSource"
import { User } from '../core/entities/User';
import { RegisterDto } from "../dtos/UserDTO";
import { LoginDto } from "src/dtos/AuthDTO";

const _CONFIGS = new Configs();

export class UsersService {
  // get entity repositories
  private _repository;
  constructor() {
    this._repository = AppDataSource.getRepository(User)
  }

  public async create(params: RegisterDto): Promise<APIResponse<any>> {

    const isExist = await AppDataSource.manager.findOne(User, {
      where: {
        email: params.email,
      },
    });
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
    await this._repository.save(user);

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

  public async login(params: LoginDto): Promise<APIResponse<any>> {
    return new Promise(async (resolve, reject) => {
      const user = await AppDataSource.manager.findOne(User, {
        where: {
          email: params.email,
        },
      });
      if (!user) {
        return new APIResponse<string>("User not exist", StatusCode.BadRequest);
      }
      bcrypt.compare(params.password, user.password, async (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const payload = {
            ...user
          };
          //Create token
          const token = jwt.sign(
            payload,
            _CONFIGS.JWT.secret,
            {
              expiresIn: _CONFIGS.JWT.expiresIn,
              audience: _CONFIGS.JWT.audience,
              subject: _CONFIGS.JWT.subject,
            }
          );
          resolve(new APIResponse<IUser>({
            ...payload,
            token: token
          }, StatusCode.Ok));
        }
        else {
          resolve(new APIResponse<string>("Bad Request", StatusCode.BadRequest));
        }
      });
    });
  }
}