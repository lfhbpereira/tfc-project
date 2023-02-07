import { Router } from 'express';

import TeamController from '../controllers/team.controller';
import TeamModel from '../database/models/team.model';
import TeamRepository from '../repositories/team.repository';
import TeamService from '../services/team.service';

export default class TeamRouter {
  public router: Router;
  private _teamRepository: TeamRepository;
  private _teamService: TeamService;
  private _teamController: TeamController;

  constructor() {
    this.router = Router();
    this._teamRepository = new TeamRepository(TeamModel);
    this._teamService = new TeamService(this._teamRepository);
    this._teamController = new TeamController(this._teamService);

    this.router.get('/', this._teamController.getAll);
    this.router.get('/:id', this._teamController.getById);
  }
}
