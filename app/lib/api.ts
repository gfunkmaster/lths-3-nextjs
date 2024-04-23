import { Pokemon } from "./definitions";

const POKEMON_API = "https://pokeapi.co/api/v2/";

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
  try {
    const res = await fetch(POKEMON_API + "pokemon?limit=151&offset=0", {
      next: {
        revalidate: 50000,
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
   
    return data.results;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

export const fetchPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const res = await fetch(POKEMON_API + 'pokemon/' + name)
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Pokemon = await res.json();
   
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    throw error;
  }
};


export const fetchRandomPokemonBasedOnType = async (type: string): Promise<Pokemon> => {
  try {
    // Fetch list of Pokémon by type
    const res = await fetch(`${POKEMON_API}/type/${type}?limit=151
    `);
    if (!res.ok) {
      throw new Error("Failed to fetch Pokémon by type");
    }
    const data = await res.json();

    // Extract Pokémon names from the list
    const pokemonNames = data.pokemon.map((entry: { pokemon: { name: string } }) => entry.pokemon.name);

    // Select a random Pokémon name
    const randomPokemonName = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];

    // Fetch details of the random Pokémon
    const randomPokemon:Pokemon = await fetchPokemon(randomPokemonName);
  
    return randomPokemon;
  } catch (error) {
    console.error("Error fetching random Pokémon by type:", error);
    throw error;
  }

}