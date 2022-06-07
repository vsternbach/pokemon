import {NextFunction, Request, Response} from 'express';
import PokemonService from './service';
import {ErrorCode} from "../error-codes";

export default class PokemonCtrl {
  static getAll(req: Request, res: Response) {
    console.log(req.params);
    res.json(PokemonService.getAll());
  }
  static getOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const pokemon = PokemonService.getOne(Number(id));
    res.send(pokemon);
  }
  static create(req: Request, res: Response) {}
  static update(req: Request, res: Response) {}
  static deleteOne(req: Request, res: Response) {}
}
