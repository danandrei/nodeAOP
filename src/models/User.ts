import mongoose from 'mongoose';
import { Schema, Model, model } from 'mongoose';

import { IUser } from '../interfaces/IUser';

const userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String,
  }
}, { timestamps: true });

export const User: Model<IUser> = model<IUser>('users', userSchema);
