import * as bcrypt from 'bcryptjs';

import HttpException from '../utils/httpException';
import IUserRepository from '../repositories/interfaces/IUserRepository';
import IUserService from './interfaces/IUserService';
import Token from '../auth/token';
import UserModel from '../database/models/user.model';

export default class UserService implements IUserService {
  constructor(private _userRepository: IUserRepository) {}

  public async login(email: string, password: string): Promise<string | null> {
    const user = await this._userRepository.findByEmail(email);

    if (!user) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    const passcode = bcrypt.compareSync(password, user.password);

    if (!passcode) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    const { password: _, ...data } = user;
    const token = Token.create(data.dataValues);

    return token;
  }

  public async validate(id: number): Promise<string> {
    const user = await this._userRepository.findById(id);
    const { role } = user as UserModel;

    return role;
  }
}
