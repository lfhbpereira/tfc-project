import * as express from 'express';

import TeamController from '../controllers/team.controller';

const teamRouter = express.Router();

teamRouter.get('/', TeamController.getAllTeams);

export default teamRouter;
