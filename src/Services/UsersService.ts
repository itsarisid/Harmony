import { StatusCode } from './../interface/common/StatusCode';
import { APIResponse } from '../models/APIResponse';
import { IUser } from "../interface/IUser";
import bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken';
import { Configs } from '../config/Config';
import { Category } from '../core/entities/Category';
import { Post } from '../core/entities/Post';
import { AppDataSource } from "../core/DataSource"

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
    const category1 = new Category();
    category1.name = "Angular";

    const category2 = new Category();
    category2.name = "React";

    const post = new Post();
    post.title = "ABC";
    post.text = `angular and react are good and framwork for UI.`;
    post.categories = [category1, category2];

    await AppDataSource.manager.save(post);
    console.log("Post has been saved: ", post);

    const loadedPosts = await AppDataSource.manager.find(Post);
    console.log("Loaded posts from the database: ", loadedPosts);
    return new APIResponse<string>("", StatusCode.BadRequest);
  }
}