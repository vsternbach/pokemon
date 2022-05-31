import pokemons from './db';
import { Pokemon } from './model';

export class PokemonService {
  getAll() {

  }
  getOne(id: number) {

  }
  create(pokemon: Pokemon) {

  }
  update(id: number, data: Partial<Omit<Pokemon, 'id'>>) {

  }
  deleteOne(id: number) {

  }
}
export default new PokemonService();
