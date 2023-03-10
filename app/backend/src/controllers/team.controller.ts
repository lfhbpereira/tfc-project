import { Request, Response } from 'express';

import ITeamController from './interfaces/ITeamController';
import ITeamService from '../services/interfaces/ITeamService';

export default class TeamController implements ITeamController {
  constructor(private _teamService: ITeamService) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const teams = await this._teamService.getAll();

    return res.status(200).json(teams);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const team = await this._teamService.getById(Number(id));

    return res.status(200).json(team);
  };
}
