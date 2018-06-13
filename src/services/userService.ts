import mongoose, { Document } from 'mongoose';
import { User } from '../models';

export class UserService {

  public getUser(username: String) {

    return User.findOne({ username }).exec();
  }
}
