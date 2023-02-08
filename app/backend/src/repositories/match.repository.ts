import IMatch from '../interfaces/IMatch';
import IMatchRepository from './interfaces/IMatchRepository';
import MatchModel from '../database/models/match.model';

export default class MatchRepository implements IMatchRepository {
  constructor(private _matchModel: typeof MatchModel) {}

  public async getAll(): Promise<IMatch[]> {
    const matches = await this._matchModel.findAll({
      include: [
        { association: 'homeTeam', attributes: ['teamName'] },
        { association: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as IMatch[];
  }

  public async getByQuery(inProgress: boolean): Promise<IMatch[]> {
    const matches = await this._matchModel.findAll({ where: { inProgress },
      include: [
        { association: 'homeTeam', attributes: ['teamName'] },
        { association: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as IMatch[];
  }
}
