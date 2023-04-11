import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';
import authMiddleware from '../middlewares/authMiddleware';


export default class UserController {
  constructor(private userService = new UserService()) {}

  public register = async (req: Request, res: Response, next: NextFunction) => {

    const newUser = await this.userService.register(req.body);

    return res.status(201).json(newUser);
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {

    const { token } = await this.userService.login(req.body);

    req.headers.Authorization = token;

    return res.status(200).json(token);
  };
};
