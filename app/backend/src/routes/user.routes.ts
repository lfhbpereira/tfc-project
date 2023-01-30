import * as express from 'express';

import UserController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/', UserController.login);

export default userRouter;
