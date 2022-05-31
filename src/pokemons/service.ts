import pokemons from './db';
import { Pokemon } from './model';

export class PokemonService {
  getAll() {
    return pokemons;
  }
  getOne(id: number) {
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    if (!pokemon) {
      throw Error('Pokemon not found');
    }
    return pokemon;
  }
  create(pokemon: Pokemon) {
    pokemons.push(pokemon);
    return pokemons[10];
  }
  update(id: number, data: Partial<Omit<Pokemon, 'id'>>) {
    const pokemonIndex = pokemons.findIndex((pokemon) => pokemon.id === id);
    pokemons[pokemonIndex] = { ...pokemons[pokemonIndex], ...data };
    return pokemons[pokemonIndex];
  }
  deleteOne(id: number) {}
}
export default new PokemonService();
