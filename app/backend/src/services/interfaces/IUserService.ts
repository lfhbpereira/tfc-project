export default interface IUserService {
  login(email: string, password: string): Promise<string | null>;
  validate(id: number): Promise<string>;
}
