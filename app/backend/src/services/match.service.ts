import IMatch from '../interfaces/IMatch';
import IMatchRepository from '../repositories/interfaces/IMatchRepository';
import IMatchService from './interfaces/IMatchService';

export default class MatchService implements IMatchService {
  constructor(private _matchRepository: IMatchRepository) {}

  public async getAll(): Promise<IMatch[]> {
    const matches = await this._matchRepository.getAll();

    return matches;
  }

  public async getByQuery(inProgress: boolean): Promise<IMatch[]> {
    const matches = await this._matchRepository.getByQuery(inProgress);

    return matches;
  }
}
