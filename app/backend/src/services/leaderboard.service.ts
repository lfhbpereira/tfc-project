import ILeaderboard from '../interfaces/ILeaderboard';
import ILeaderboardRepository from '../repositories/interfaces/ILeaderboardRepository';
import ILeaderboardService from './interfaces/ILeaderboardService';

export default class LeaderboardService implements ILeaderboardService {
  constructor(private _leaderboardRepository: ILeaderboardRepository) {}

  public async getHomeTeamLeaderboard(): Promise<ILeaderboard[]> {
    const homeTeamLeaderboard = await this._leaderboardRepository.getHomeTeamLeaderboard();

    return homeTeamLeaderboard;
  }

  public async getAwayTeamLeaderboard(): Promise<ILeaderboard[]> {
    const awayTeamLeaderboard = await this._leaderboardRepository.getAwayTeamLeaderboard();

    return awayTeamLeaderboard;
  }

  public async getAllTeamsLeaderboard(): Promise<ILeaderboard[]> {
    const allTeamsLeaderboard = await this._leaderboardRepository.getAllTeamsLeaderboard();

    return allTeamsLeaderboard;
  }
}
