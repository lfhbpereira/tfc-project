import IMatches from '../../interfaces/IMatch';

export default interface IMatchService {
  getAll(): Promise<IMatches[]>;
  getByQuery(inProgress: boolean): Promise<IMatches[]>;
}
