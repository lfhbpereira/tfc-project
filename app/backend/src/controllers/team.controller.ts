import { Request, Response } from 'express';

import TeamService from '../services/team.service';

export default class TeamController {
  static async getAll(_req: Request, res: Response) {
    const { message } = await TeamService.getAll();

    return res.status(200).json(message);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;

    const { message } = await TeamService.getById(Number(id));

    return res.status(200).json(message);
  }
}
