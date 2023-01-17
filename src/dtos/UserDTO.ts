import { IUser } from "../interface/IUser";

// A post request should not contain an id.
export type RegisterDto = Pick<IUser,
  "email"
  | "name"
  | "password"
  | "profilePhoto"
>;