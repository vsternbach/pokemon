import { Request, Response } from 'express';
import pokemonService from './service';

export class PokemonCtrl {
  getAll(req: Request, res: Response) {
    console.log(req.params);
    res.json(pokemonService.getAll());
  }
  getOne(req: Request, res: Response) {
    const { id } = req.params;
    const pokemon = pokemonService.getOne(Number(id));
    if (!pokemon) {
      throw 'pokemon not found';
    }
    res.send(pokemon);
  }
  create(req: Request, res: Response) {}
  update(req: Request, res: Response) {}
  deleteOne(req: Request, res: Response) {}
}

export default new PokemonCtrl();
