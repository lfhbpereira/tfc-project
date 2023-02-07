import UserModel from '../../database/models/user.model';

export default interface IUserRepository {
  login(email: string): Promise<UserModel | null>;
  validate(id: number): Promise<UserModel | null>;
}
