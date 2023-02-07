import { Router } from 'express';

import TeamRouter from './team.router';
import UserRouter from './user.router';

export default class Route {
  public router: Router;
  private _userRouter: UserRouter;
  private _teamRouter: TeamRouter;

  constructor() {
    this.router = Router();
    this._userRouter = new UserRouter();
    this._teamRouter = new TeamRouter();

    this.router.use('/login', this._userRouter.router);
    this.router.use('/teams', this._teamRouter.router);
  }
}
