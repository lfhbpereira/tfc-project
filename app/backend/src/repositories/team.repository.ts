import ITeamRepository from './interfaces/ITeamRepository';
import TeamModel from '../database/models/team.model';

export default class TeamRepository implements ITeamRepository {
  constructor(private _teamModel: typeof TeamModel) {}

  public async getAll(): Promise<TeamModel[]> {
    const teams = await this._teamModel.findAll();

    return teams;
  }

  public async getById(id: number): Promise<TeamModel | null> {
    const team = await this._teamModel.findByPk(id);

    return team;
  }
}
