import * as bcrypt from 'bcryptjs';

import { IUserCredentials } from '../interfaces/IUser';
import Token from '../auth/token';
import UserModel from '../database/models/user.model';

const token = new Token();

export default class UserService {
  static async login(login: IUserCredentials) {
    const { email, password } = login;

    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      return { type: 'Unauthorized', message: 'Incorrect email or password' };
    }

    const passcode = bcrypt.compareSync(password, user.password);

    if (!passcode) {
      return { type: 'Unauthorized', message: 'Incorrect email or password' };
    }

    const newToken = token.create(user as IUserCredentials);

    return { type: null, message: newToken };
  }
}
