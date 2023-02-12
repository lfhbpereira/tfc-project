import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

import HttpException from '../utils/httpException';

export default class Token {
  static create(payload: object): string {
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return token;
  }

  static verify(token: string): JwtPayload {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

      return decoded as JwtPayload;
    } catch (error) {
      throw new HttpException(401, 'Token must be a valid token');
    }
  }
}
