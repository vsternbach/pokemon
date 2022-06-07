import pokemons from './db';
import pokemonService from './service';
import { Pokemon } from './model';

describe('Pokemon service', () => {
  beforeEach(() => {});

  test('getAll', () => {
    const data = pokemonService.getAll();

    expect(data.length).toEqual(10);
  });

  test('getOne - success', () => {
    const data = pokemonService.getOne(1);
    expect(data.name).toEqual('Bulbizarre');
  });

  test('getOne - fail', () => {
    // try {
    //   pokemonService.getOne(0);
    // } catch (e: any) {
    //   expect(e.message).toEqual('Pokemon not found');
    // }
    expect(() => {
      pokemonService.getOne(0)
    }).toThrow('Pokemon not found');
  });

  test('create', () => {
    const mock = {
      // id: 100,
      name: 'Groupix',
      hp: 17,
      cp: 8,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
      types: ['Feu'],
    };
    expect(pokemons.length).toEqual(10);
    const data = pokemonService.create(mock);
    expect(pokemons.length).toEqual(11);
    expect(data.name).toEqual('Groupix');
    expect(data.id).toEqual(100);
  });

  test('update', () => {
    const mock = {
      name: 'Vlad',
    };

    expect(pokemonService.getOne(1).name).toEqual('Bulbizarre');
    const data = pokemonService.update(1, mock);
    expect(data.name).toEqual('Vlad');
    // expect(data).toMatchSnapshot();
  });
});
