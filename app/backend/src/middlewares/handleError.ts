import { NextFunction, Request, Response } from 'express';

import HttpException from '../utils/httpException';

export default class HandleError {
  static err(err: HttpException, _req: Request, res: Response, _next: NextFunction) {
    const { status, message } = err;

    return res.status(status || 500).json({ message });
  }
}
