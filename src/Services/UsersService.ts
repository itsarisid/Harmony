import { User } from "../interface/User";

// A post request should not contain an id.
export type UserCreationParams = Pick<User,
  "email"
  | "name"
  | "password"
  | "phoneNumber"
>;

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      email: "sajid@khan.com",
      name: name ?? "Sajid Khan",
      password: "123456",
      phoneNumber: "",
      token: ""
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    //Encrypt user password
    //encryptedPassword = await bcrypt.hash(password, 10);
    return {
      ...userCreationParams,
    };
  }
}