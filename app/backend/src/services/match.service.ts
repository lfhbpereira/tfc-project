import { IMatches } from '../interfaces/IMatch';
import IMatchRepository from '../repositories/interfaces/IMatchRepository';
import IMatchService from './interfaces/IMatchService';

export default class MatchService implements IMatchService {
  constructor(private _matchRepository: IMatchRepository) {}

  public async getAll(): Promise<IMatches[]> {
    const matches = await this._matchRepository.getAll();

    return matches;
  }

  public async getByQuery(inProgress: boolean): Promise<IMatches[]> {
    const matches = await this._matchRepository.getByQuery(inProgress);

    return matches;
  }
}
