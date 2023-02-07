import { Request, Response } from 'express';

import IUserController from './interfaces/IUserController';
import IUserService from '../services/interfaces/IUserService';

export default class UserController implements IUserController {
  constructor(private _userService: IUserService) {}

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const token = await this._userService.login(email, password);

    return res.status(200).json({ token });
  };

  public validate = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body.user;
    const role = await this._userService.validate(id);

    return res.status(200).json({ role });
  };
}
