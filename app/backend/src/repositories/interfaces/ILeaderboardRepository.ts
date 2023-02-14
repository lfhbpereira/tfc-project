import ILeaderboard from '../../interfaces/ILeaderboard';

export default interface ILeaderboardRepository {
  getHomeTeamLeaderboard(): Promise<ILeaderboard[]>;
  getAwayTeamLeaderboard(): Promise<ILeaderboard[]>;
  getAllTeamsLeaderboard(): Promise<ILeaderboard[]>;
}
