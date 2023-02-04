import { Request, Response } from 'express';

import MatchService from '../services/match.service';

export default class MatchController {
  static async getAll(_req: Request, res: Response) {
    const { message } = await MatchService.getAll();

    return res.status(200).json(message);
  }
}
