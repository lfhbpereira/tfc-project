import { Request, Response } from 'express';

import ILeaderboardController from './interfaces/ILeaderboardController';
import ILeaderboardService from '../services/interfaces/ILeaderboardService';

export default class LeaderboardController implements ILeaderboardController {
  constructor(private _leaderboardService: ILeaderboardService) {}

  public getHomeTeamLeaderboard = async (_req: Request, res: Response): Promise<Response> => {
    const homeTeamLeaderboard = await this._leaderboardService.getHomeTeamLeaderboard();

    return res.status(200).json(homeTeamLeaderboard);
  };

  public getAwayTeamLeaderboard = async (_req: Request, res: Response): Promise<Response> => {
    const awayTeamLeaderboard = await this._leaderboardService.getAwayTeamLeaderboard();

    return res.status(200).json(awayTeamLeaderboard);
  };
}
