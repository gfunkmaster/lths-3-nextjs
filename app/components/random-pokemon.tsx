"use client";
import React, { useState } from "react";
import { fetchRandomPokemonBasedOnType } from "../lib/api";
import { Pokemon, typeColors } from "../lib/definitions";
import PokemonImage from "../ui/pokemon/pokemon-image";

export default function RandomPokemon() {
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

  const handleTypeClick = (type: string) => {
    fetchRandomPokemonBasedOnType(type)
      .then((pokemon) => setRandomPokemon(pokemon))
      .catch((error) =>
        console.error(`Error fetching random Pokémon for type ${type}:`, error)
      );
  };

  return (
    <div>
     <h1 className="text-3xl font-bold mb-4 ">Fetch your random Pokémon based on Types</h1>

     
      <div className="flex space-x-4">
        {Object.keys(typeColors).map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-md shadow-md text-black ${typeColors[type]}`}
            onClick={() => handleTypeClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      {randomPokemon && (
        <div
          className={`mt-4 p-4 rounded-md shadow-md ${
            typeColors[randomPokemon.types[0].type.name]
          }`}
        >
          <h2 className="text-xl font-semibold">
            {randomPokemon.name.toUpperCase()}
          </h2>
          <PokemonImage
            src={randomPokemon?.sprites.other["official-artwork"].front_default}
            alt={randomPokemon.name}
          />
        </div>
      )}
    </div>
  );
}
