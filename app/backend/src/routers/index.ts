import { Router } from 'express';

import MatchRouter from './match.router';
import TeamRouter from './team.router';
import UserRouter from './user.router';

export default class Route {
  public router: Router;
  private _userRouter: UserRouter;
  private _teamRouter: TeamRouter;
  private _matchRouter: MatchRouter;

  constructor() {
    this.router = Router();
    this._userRouter = new UserRouter();
    this._teamRouter = new TeamRouter();
    this._matchRouter = new MatchRouter();

    this.router.use('/login', this._userRouter.router);
    this.router.use('/teams', this._teamRouter.router);
    this.router.use('/matches', this._matchRouter.router);
  }
}
