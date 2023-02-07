
export interface PokemonTypes {
  ability: any;
  name: string;
  url: string;
  id: number;
  types: Array<string>;
  abilities: {
    ability: {
      name: string;
    }
  };
  height: number;
  weight: number;
  weaknesses: Array<string>;
  pokemons: Array<PokemonInfo>
  slot: string;
}

export type PokemonType = {
  name: string;
  id: string;
  slot: number;
  type: {
    name: string | any;
  }
  stat: {
    name: string;
    id: number;
  }
  base_stat: string;
};

export type PokemonInfo = {
  id: number;
  name: string;
  type: string;
};
