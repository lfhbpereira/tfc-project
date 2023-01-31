import * as express from 'express';

import UserController from '../controllers/user.controller';
import ValidateUserLogin from '../middlewares/validateUserLogin';

const userRouter = express.Router();

userRouter.post(
  '/',
  ValidateUserLogin.emailValidation,
  ValidateUserLogin.passwordValidation,
  UserController.login,
);

export default userRouter;
