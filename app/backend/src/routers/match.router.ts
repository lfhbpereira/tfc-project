import { Router } from 'express';

import MatchController from '../controllers/match.controller';
import MatchModel from '../database/models/match.model';
import MatchRepository from '../repositories/match.repository';
import MatchService from '../services/match.service';
import TeamModel from '../database/models/team.model';
import TeamRepository from '../repositories/team.repository';
import TeamService from '../services/team.service';
import ValidateUser from '../middlewares/validateUser';

export default class MatchRouter {
  public router: Router;
  private _matchRepository: MatchRepository;
  private _matchService: MatchService;
  private _matchController: MatchController;
  private _teamRepository: TeamRepository;
  private _teamService: TeamService;

  constructor() {
    this.router = Router();
    this._teamRepository = new TeamRepository(TeamModel);
    this._teamService = new TeamService(this._teamRepository);
    this._matchRepository = new MatchRepository(MatchModel);
    this._matchService = new MatchService(this._matchRepository, this._teamService);
    this._matchController = new MatchController(this._matchService);

    this.router.get('/', this._matchController.getAll);
    this.router.get('/?', this._matchController.getByQuery);

    this.router.post('/', ValidateUser.token, this._matchController.create);

    this.router.patch('/:id/finish', this._matchController.updateStatus);
  }
}
