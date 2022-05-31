import { Request, Response } from 'express';
import pokemonService from './service';

export class PokemonCtrl {
  getAll(req: Request, res: Response) {
  }
  getOne(req: Request, res: Response) {
  }
  create(req: Request, res: Response) {}
  update(req: Request, res: Response) {}
  deleteOne(req: Request, res: Response) {}
}

export default new PokemonCtrl();
