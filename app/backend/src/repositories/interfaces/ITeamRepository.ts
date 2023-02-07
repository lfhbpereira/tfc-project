import TeamModel from '../../database/models/team.model';

export default interface IUserRepository {
  getAll(): Promise<TeamModel[]>;
  getById(id: number): Promise<TeamModel | null>;
}
