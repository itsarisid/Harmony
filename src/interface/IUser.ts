export interface IUser {
    email: string;
    name: string;
    password?:string;
    profilePhoto: string;
    token?:string;
  }

export interface ILogin{
  email: string;
  password:string;
}

export interface Registration{
  token?:string
}