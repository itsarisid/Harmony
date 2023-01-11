import { User } from "../interface/User";

// A post request should not contain an id.
export type UserCreationParams = Pick<User,
  "email"
  | "name"
  | "password"
  | "phoneNumbers"
>;

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: "sajid@khan.com",
      name: name ?? "Sajid Khan",
      password: "123456",
      phoneNumbers: [],
      token: ""
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    //Encrypt user password
    //encryptedPassword = await bcrypt.hash(password, 10);
    return {
      id: Math.floor(Math.random() * 10000),
      ...userCreationParams,
    };
  }
}