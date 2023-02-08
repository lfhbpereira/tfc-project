import IMatch from '../../interfaces/IMatch';

export default interface IMatchRepository {
  getAll(): Promise<IMatch[]>;
  getByQuery(inProgress: boolean): Promise<IMatch[]>;
}
