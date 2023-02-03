import * as express from 'express';

import TeamController from '../controllers/team.controller';

const teamRouter = express.Router();

teamRouter.get('/', TeamController.getAll);
teamRouter.get('/:id', TeamController.getTeamById);

export default teamRouter;
