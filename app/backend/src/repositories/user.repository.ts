import IUserRepository from './interfaces/IUserRepository';
import UserModel from '../database/models/user.model';

export default class UserRepository implements IUserRepository {
  constructor(private userModel: typeof UserModel) {}

  public async findByEmail(email: string): Promise<UserModel | null> {
    const user = await this.userModel.findOne({ where: { email } });

    return user;
  }

  public async findById(id: number): Promise<UserModel | null> {
    const user = await this.userModel.findByPk(id);

    return user;
  }
}
