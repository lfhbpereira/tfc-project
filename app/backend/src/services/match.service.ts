import { IMatches, NewMatch } from '../interfaces/IMatch';
import IMatchRepository from '../repositories/interfaces/IMatchRepository';
import IMatchService from './interfaces/IMatchService';
import ITeamService from './interfaces/ITeamService';
import MatchModel from '../database/models/match.model';

export default class MatchService implements IMatchService {
  constructor(private _matchRepository: IMatchRepository, private _teamService: ITeamService) {}

  public async getAll(): Promise<IMatches[]> {
    const matches = await this._matchRepository.getAll();

    return matches;
  }

  public async getByQuery(inProgress: boolean): Promise<IMatches[]> {
    const matches = await this._matchRepository.getByQuery(inProgress);

    return matches;
  }

  public async create(match: NewMatch): Promise<MatchModel> {
    const { homeTeamId, awayTeamId } = match;

    await Promise.all([homeTeamId, awayTeamId].map((id) => this._teamService.getById(id)));

    const newMatch = await this._matchRepository.create(match);

    return newMatch;
  }

  public async updateStatus(id: number): Promise<void> {
    await this._matchRepository.updateStatus(id);
  }

  public async updateScore(id: number, homeTeamGoals: number, awayTeamGoals: number)
    : Promise<void> {
    await this._matchRepository.updateScore(id, homeTeamGoals, awayTeamGoals);
  }
}
