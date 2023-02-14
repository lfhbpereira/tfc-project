import ILeaderboard from '../interfaces/ILeaderboard';
import ILeaderboardRepository from '../repositories/interfaces/ILeaderboardRepository';
import ILeaderboardService from './interfaces/ILeaderboardService';

export default class LeaderboardService implements ILeaderboardService {
  constructor(private _leaderboardRepository: ILeaderboardRepository) {}

  public async getHomeTeamLeaderboard(): Promise<ILeaderboard[]> {
    const homeTeamLeaderboard = await this._leaderboardRepository.getHomeTeamLeaderboard();

    return homeTeamLeaderboard;
  }
}
