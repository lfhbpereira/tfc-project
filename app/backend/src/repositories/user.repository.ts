import IUserRepository from './interfaces/IUserRepository';
import UserModel from '../database/models/user.model';

export default class UserRepository implements IUserRepository {
  constructor(private _userModel: typeof UserModel) {}

  public async login(email: string): Promise<UserModel | null> {
    const user = await this._userModel.findOne({ where: { email } });

    return user;
  }

  public async validate(id: number): Promise<UserModel | null> {
    const user = await this._userModel.findByPk(id);

    return user;
  }
}
