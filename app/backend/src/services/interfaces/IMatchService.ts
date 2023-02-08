import IMatch from '../../interfaces/IMatch';

export default interface IMatchService {
  getAll(): Promise<IMatch[]>;
  getByQuery(inProgress: boolean): Promise<IMatch[]>;
}
