export interface User {
    email: string;
    name: string;
    password:string;
    phoneNumber: string;
    token?:string
  }

export interface Registration{
  token?:string
}