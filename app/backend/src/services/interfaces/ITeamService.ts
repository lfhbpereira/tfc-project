import TeamModel from '../../database/models/team.model';

export default interface ITeamService {
  getAll(): Promise<TeamModel[]>;
  getById(id: number): Promise<TeamModel | null>;
}
