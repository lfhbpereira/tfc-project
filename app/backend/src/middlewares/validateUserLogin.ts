import { NextFunction, Request, Response } from 'express';

import HttpException from '../utils/httpException';
import Token from '../auth/token';

export default class ValidateUser {
  static login(req: Request, _res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new HttpException(400, 'All fields must be filled');
    }

    next();
  }

  static token(req: Request, _res: Response, next: NextFunction): Response | void {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new HttpException(401, 'Token not found');
    }

    req.body.user = Token.verify(token);

    next();
  }
}
