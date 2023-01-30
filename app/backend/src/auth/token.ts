import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import { IUserCredentials } from '../interfaces/IUser';

export default class Token {
  private _secret: jwt.Secret = process.env.JWT_SECRET as string;
  private _jwtConfig: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: '1h',
  };

  create(user: IUserCredentials): string {
    const token = jwt.sign({ ...user }, this._secret, this._jwtConfig);

    return token;
  }

  validate(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization: token } = req.headers;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const user = jwt.verify(token, this._secret);
      req.body = { ...req.body, user };
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
}
