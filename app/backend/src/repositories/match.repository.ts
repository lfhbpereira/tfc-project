import { IMatches, NewMatch } from '../interfaces/IMatch';
import IMatchRepository from './interfaces/IMatchRepository';
import MatchModel from '../database/models/match.model';

export default class MatchRepository implements IMatchRepository {
  constructor(private _matchModel: typeof MatchModel) {}

  public async getAll(): Promise<IMatches[]> {
    const matches = await this._matchModel.findAll({
      include: [
        { association: 'homeTeam', attributes: ['teamName'] },
        { association: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as IMatches[];
  }

  public async getByQuery(inProgress: boolean): Promise<IMatches[]> {
    const matches = await this._matchModel.findAll({ where: { inProgress },
      include: [
        { association: 'homeTeam', attributes: ['teamName'] },
        { association: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as IMatches[];
  }

  public async create(match: NewMatch): Promise<MatchModel> {
    const newMatch = await this._matchModel.create(match);

    return newMatch;
  }

  public async updateStatus(id: number): Promise<void> {
    await this._matchModel.update({ inProgress: false }, { where: { id } });
  }
}
