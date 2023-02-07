import UserModel from '../../database/models/user.model';

export default interface IUserRepository {
  findByEmail(email: string): Promise<UserModel | null>;
  findById(id: number): Promise<UserModel | null>;
}
