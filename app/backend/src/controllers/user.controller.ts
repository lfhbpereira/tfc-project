import { Request, Response } from 'express';

import UserService from '../services/user.service';

export default class UserController {
  static async login(req: Request, res: Response) {
    const user = req.body;

    const { type, message } = await UserService.login(user);

    if (type) {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  }
}
