import { ILogin } from "../interface/IUser";

export type LoginDto = Pick<ILogin, "email"| "password">;