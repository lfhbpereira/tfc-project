import { Router } from 'express';

import MatchRouter from './match.router';
import TeamRouter from './team.router';
import UserRouter from './user.router';
import LeaderboardRouter from './leaderboard.router';

export default class Route {
  public router: Router;
  private _userRouter: UserRouter;
  private _teamRouter: TeamRouter;
  private _matchRouter: MatchRouter;
  private _leaderboardRouter: LeaderboardRouter;

  constructor() {
    this.router = Router();
    this._userRouter = new UserRouter();
    this._teamRouter = new TeamRouter();
    this._matchRouter = new MatchRouter();
    this._leaderboardRouter = new LeaderboardRouter();

    this.router.use('/login', this._userRouter.router);
    this.router.use('/teams', this._teamRouter.router);
    this.router.use('/matches', this._matchRouter.router);
    this.router.use('/leaderboard', this._leaderboardRouter.router);
  }
}
