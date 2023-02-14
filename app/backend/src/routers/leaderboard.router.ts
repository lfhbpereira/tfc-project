import { Router } from 'express';

import LeaderboardController from '../controllers/leaderboard.controller';
import LeaderboardRepository from '../repositories/leaderboard.repository';
import LeaderboardService from '../services/leaderboard.service';

export default class LeadeboardRouter {
  public router: Router;
  private _leaderboardRepository: LeaderboardRepository;
  private _leaderboardService: LeaderboardService;
  private _leaderboardController: LeaderboardController;

  constructor() {
    this.router = Router();
    this._leaderboardRepository = new LeaderboardRepository();
    this._leaderboardService = new LeaderboardService(this._leaderboardRepository);
    this._leaderboardController = new LeaderboardController(this._leaderboardService);

    this.router.get('/home', this._leaderboardController.getHomeTeamLeaderboard);
    this.router.get('/away', this._leaderboardController.getAwayTeamLeaderboard);
  }
}
