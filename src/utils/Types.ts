export interface AppInitialState{}

export interface PokemonTypeInitialState{
    allPokemon: undefined | genericPokemonType[];
    randomPokemons: undefined | generatedPokemonTye[];
}

export interface genericPokemonType {
    name: string;
    url: string;
}

export interface generatedPokemonTye{
    name: string;
    id: number;
    image: string;
    types: pokemonTypeInterface[]
}

export interface pokemonTypeInterface {
    [key: string]: {
        image: string,
        resistance: string[];
        strength: string[];
        weakness: string[];
        vulnerable: string[];
    }
}
