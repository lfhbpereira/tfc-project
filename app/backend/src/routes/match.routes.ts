import * as express from 'express';

import MatchController from '../controllers/match.controller';

const matchRouter = express.Router();

matchRouter.get('/', MatchController.getAll);
matchRouter.get('/?', MatchController.getByQuery);

export default matchRouter;
