import { IUserCredentials } from '../interfaces/IUser';
import Token from '../auth/token';
import UserModel from '../database/models/user.model';

const token = new Token();

export default class UserService {
  static async login(login: IUserCredentials) {
    const { email } = login;

    const user = await UserModel.findOne({ where: { email } });

    const newToken = token.create(user as IUserCredentials);

    return { type: null, message: newToken };
  }
}
