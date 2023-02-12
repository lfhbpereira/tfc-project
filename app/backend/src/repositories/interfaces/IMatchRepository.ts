import { IMatches, NewMatch } from '../../interfaces/IMatch';
import MatchModel from '../../database/models/match.model';

export default interface IMatchRepository {
  getAll(): Promise<IMatches[]>;
  getByQuery(inProgress: boolean): Promise<IMatches[]>;
  create(match: NewMatch): Promise<MatchModel>;
  updateStatus(id: number): Promise<void>;
}
