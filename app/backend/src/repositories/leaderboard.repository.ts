import { QueryTypes } from 'sequelize';

import { awayTeams, homeTeams } from '../utils/queries';
import ILeaderboard from '../interfaces/ILeaderboard';
import ILeaderboardRepository from './interfaces/ILeaderboardRepository';
import sequelize from '../database/models';

export default class LeaderboardRepository implements ILeaderboardRepository {
  constructor(private _sequelize = sequelize) {}

  public async getHomeTeamLeaderboard(): Promise<ILeaderboard[]> {
    const homeTeamLeaderboard = await this._sequelize.query(homeTeams, { type: QueryTypes.SELECT });

    return homeTeamLeaderboard as ILeaderboard[];
  }

  public async getAwayTeamLeaderboard(): Promise<ILeaderboard[]> {
    const awayTeamLeaderboard = await this._sequelize.query(awayTeams, { type: QueryTypes.SELECT });

    return awayTeamLeaderboard as ILeaderboard[];
  }
}
