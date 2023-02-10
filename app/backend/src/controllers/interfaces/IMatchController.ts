import { Request, Response } from 'express';

export default interface IMatchController {
  getAll(req: Request, res: Response): Promise<Response>;
  getByQuery(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
}
