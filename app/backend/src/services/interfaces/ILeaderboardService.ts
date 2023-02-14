import ILeaderboard from '../../interfaces/ILeaderboard';

export default interface ILeaderboardService {
  getHomeTeamLeaderboard(): Promise<ILeaderboard[]>;
}
