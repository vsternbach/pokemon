import pokemons from './db';
import { Pokemon } from './model';
import { ErrorCode } from '../error-codes';

export default class PokemonService {
  static getAll() {
    return pokemons;
  }
  static getOne(id: number) {
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    if (!pokemon) {
      throw ErrorCode.NotFound;
    }
    return pokemon;
  }
  static create(pokemon: Omit<Pokemon, 'id'>) {
    pokemons.push({ ...pokemon, id: 100 });
    return pokemons[10];
  }
  static update(id: number, data: Partial<Omit<Pokemon, 'id'>>) {
    const pokemonIndex = pokemons.findIndex((pokemon) => pokemon.id === id);
    pokemons[pokemonIndex] = { ...pokemons[pokemonIndex], ...data };
    return pokemons[pokemonIndex];
  }
  static deleteOne(id: number) {}
}
