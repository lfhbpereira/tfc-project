import { NextFunction, Request, Response } from 'express';

import HttpException from '../utils/httpException';

export default class ValidateMatch {
  static teams(req: Request, _res: Response, next: NextFunction): Response | void {
    const { homeTeamId, awayTeamId } = req.body;

    if (homeTeamId === awayTeamId) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }

    next();
  }
}
