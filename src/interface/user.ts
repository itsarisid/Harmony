export interface User {
    id: number;
    email: string;
    name: string;
    password:string;
    phoneNumbers: string[];
    token?:string
  }

export interface Registration{
  token?:string
}