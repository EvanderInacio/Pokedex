
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
  image: string;

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
  image: string;
  type: string;
};


// export type PokemonResult = {
//   name: string;
//   url: string;
// };

// export type PokemonsData = {
//   count: number;
//   next: string;
//   pokemons: Array<PokemonInfo>;
// };

// export type PokemonModal = {
//   status: boolean;
//   pokemon_id: number | null;
// };

// export type Stats = {
//   name: string;
//   value: number;
// };

// export interface Name {
//   name: string;
// }

// export interface Type {
//   type: Name;
// }

// export interface Ability {
//   ability: Name;
// }

// export interface BaseStatus {
//   stat: Name;
//   base_stat: number;
// }