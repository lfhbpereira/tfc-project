import { Request, Response } from 'express';

export default interface ILeaderboardController {
  getHomeTeamLeaderboard(req: Request, res: Response): Promise<Response>;
  getAwayTeamLeaderboard(req: Request, res: Response): Promise<Response>;
}
