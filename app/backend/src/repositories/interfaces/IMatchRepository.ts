import IMatches from '../../interfaces/IMatch';

export default interface IMatchRepository {
  getAll(): Promise<IMatches[]>;
  getByQuery(inProgress: boolean): Promise<IMatches[]>;
}
