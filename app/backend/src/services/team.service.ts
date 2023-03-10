import HttpException from '../utils/httpException';
import ITeamRepository from '../repositories/team.repository';
import ITeamService from './interfaces/ITeamService';
import TeamModel from '../database/models/team.model';

export default class TeamService implements ITeamService {
  constructor(private _teamRepository: ITeamRepository) {}

  public async getAll(): Promise<TeamModel[]> {
    const teams = await this._teamRepository.getAll();

    return teams;
  }

  public async getById(id: number): Promise<TeamModel | null> {
    const team = await this._teamRepository.getById(id);

    if (!team) {
      throw new HttpException(404, 'There is no team with such id!');
    }

    return team;
  }
}
