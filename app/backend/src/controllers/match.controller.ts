import { Request, Response } from 'express';

import IMatchController from './interfaces/IMatchController';
import IMatchService from '../services/interfaces/IMatchService';

export default class MatchController implements IMatchController {
  constructor(private _matchService: IMatchService) {}

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    if (req.query.inProgress) {
      return this.getByQuery(req, res);
    }

    const matches = await this._matchService.getAll();

    return res.status(200).json(matches);
  };

  public getByQuery = async (req: Request, res: Response): Promise<Response> => {
    const inProg = req.query.inProgress === 'true';
    const matches = await this._matchService.getByQuery(inProg);

    return res.status(200).json(matches);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    const newMatch = await this._matchService.create({
      homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals,
    });

    return res.status(201).json(newMatch);
  };

  public updateStatus = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await this._matchService.updateStatus(Number(id));

    return res.status(200).json({ message: 'Finished' });
  };
}
