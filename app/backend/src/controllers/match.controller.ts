import { Request, Response } from 'express';

import MatchService from '../services/match.service';

export default class MatchController {
  static async getAll(req: Request, res: Response) {
    if (req.query.inProgress) {
      return MatchController.getByQuery(req, res);
    }

    const { message } = await MatchService.getAll();

    return res.status(200).json(message);
  }

  static async getByQuery(req: Request, res: Response) {
    const { inProgress } = req.query;

    const { message } = await MatchService.getByQuery(inProgress as string);

    return res.status(200).json(message);
  }
}
