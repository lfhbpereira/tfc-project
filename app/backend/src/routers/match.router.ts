import { Router } from 'express';

import MatchController from '../controllers/match.controller';
import MatchModel from '../database/models/match.model';
import MatchRepository from '../repositories/match.repository';
import MatchService from '../services/match.service';

export default class MatchRouter {
  public router: Router;
  private _matchRepository: MatchRepository;
  private _matchService: MatchService;
  private _matchController: MatchController;

  constructor() {
    this.router = Router();
    this._matchRepository = new MatchRepository(MatchModel);
    this._matchService = new MatchService(this._matchRepository);
    this._matchController = new MatchController(this._matchService);

    this.router.get('/', this._matchController.getAll);
    this.router.get('/?', this._matchController.getByQuery);
  }
}
