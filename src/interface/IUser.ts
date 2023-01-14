export interface IUser {
    email: string;
    name: string;
    password?:string;
    phoneNumber: string;
    token?:string;
    timestamps: {
      createdAt?: Date,
      updatedAt?: Date
    }
  }

export interface Registration{
  token?:string
}