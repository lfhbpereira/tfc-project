import * as express from 'express';

import Token from '../auth/token';
import UserController from '../controllers/user.controller';
import ValidateUserLogin from '../middlewares/validateUserLogin';

const userRouter = express.Router();

const token = new Token();

userRouter.post(
  '/',
  ValidateUserLogin.emailFieldValidation,
  ValidateUserLogin.passwordFieldValidation,
  UserController.login,
);

userRouter.get(
  '/validate',
  (req, res, next) => token.validate(req, res, next),
  UserController.validate,
);

export default userRouter;
