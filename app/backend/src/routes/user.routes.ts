import { Router } from 'express';

import UserController from '../controllers/user.controller';
import UserModel from '../database/models/user.model';
import UserRepository from '../repositories/user.repository';
import UserService from '../services/user.service';
import ValidateUser from '../middlewares/validateUser';

export default class UserRouter {
  public router: Router;
  private _userRepository: UserRepository;
  private _userService: UserService;
  private _userController: UserController;

  constructor() {
    this.router = Router();
    this._userRepository = new UserRepository(UserModel);
    this._userService = new UserService(this._userRepository);
    this._userController = new UserController(this._userService);

    this.router.post('/', ValidateUser.login, this._userController.login);

    this.router.get('/validate', ValidateUser.token, this._userController.validate);
  }
}
