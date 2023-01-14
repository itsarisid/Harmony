import mongoose from 'mongoose';
import { IUser } from '../interface/IUser';
const { Schema, model } = mongoose;
mongoose.set('strictQuery', false);
import { Configs } from "./../config/Config";
const config = new Configs();
const uri = `mongodb+srv://${config.dbCredentials.username}:${config.dbCredentials.password}@harmony.8w14cgj.mongodb.net/Harmony?retryWrites=true&w=majority`;
mongoose.connect(uri);

const userSchema = new Schema({
  name:  {
    type: String,
    required: true,
  },
  email:  {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date
}, {
  query: {
    ByEmail(email: string) {
      return this.find({ email });
    }
  }
});

export const User = model<IUser>('User', userSchema);
