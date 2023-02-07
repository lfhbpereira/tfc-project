import { Router } from 'express';

import UserRouter from './user.router';

export default class Route {
  public router: Router;
  private _userRouter: UserRouter;

  constructor() {
    this.router = Router();
    this._userRouter = new UserRouter();

    this.router.use('/login', this._userRouter.router);
  }
}
