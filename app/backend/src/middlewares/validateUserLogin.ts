import { NextFunction, Request, Response } from 'express';

export default class ValidateUserLogin {
  static emailValidation(req: Request, res: Response, next: NextFunction): Response | void {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    next();
  }

  static passwordValidation(req: Request, res: Response, next: NextFunction): Response | void {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    next();
  }
}
