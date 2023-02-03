import { Request, Response } from 'express';

import TeamService from '../services/team.service';

export default class TeamController {
  static async getAllTeams(_req: Request, res: Response) {
    const { message } = await TeamService.getAllTeams();

    return res.status(200).json(message);
  }

  static async getTeamById(req: Request, res: Response) {
    const { id } = req.params;

    const { message } = await TeamService.getTeamById(Number(id));

    return res.status(200).json(message);
  }
}
