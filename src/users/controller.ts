import {Request, Response} from 'express';
import UserService from "./service";

export default class UserCtrl {
  static auth(req: Request, res: Response) {
    const { user, password } = req.query;
    const token = UserService.auth(user as string, password as string);
    res.cookie('token', token).send('ok');
  }
}
