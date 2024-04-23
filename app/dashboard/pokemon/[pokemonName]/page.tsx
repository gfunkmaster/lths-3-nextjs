import { fetchPokemon } from "@/app/lib/api";
import React from "react";
import Link from "next/link";
import { Pokemon, typeColors } from "@/app/lib/definitions";
import PokemonImage from "@/app/ui/pokemon/pokemon-image";

const defaultColor = "bg-gray-100";

const getTypeColor = (types: { type: { name: string } }[]): string => {
  for (const type of types) {
    if (type.type.name in typeColors) {
      return typeColors[type.type.name];
    }
  }
  return defaultColor;
};

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject: Pokemon = await fetchPokemon(pokemonName);

  return (
    <div
      className={`container mx-auto px-4 py-8 rounded-lg shadow-lg ${getTypeColor(
        pokemonObject.types
      )}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">
          {pokemonObject.name.toUpperCase()}
        </h1>
        <Link
          href="/dashboard/pokemon"
          className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Go Back
        </Link>
      </div>
      <PokemonImage
        src={pokemonObject?.sprites.other["official-artwork"].front_default}
        alt={pokemonName}
      />
      <div className="border border-gray-200 rounded-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Abilities</h2>
        <ul className="list-disc pl-4">
          {pokemonObject &&
            pokemonObject.abilities.map((ability: any, index: any) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
        </ul>
      </div>
      <div className="border border-gray-200 rounded-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Base Experience</h2>
        <p>{pokemonObject?.base_experience}</p>
      </div>
      <div className="border border-gray-200 rounded-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Height</h2>
        <p>{pokemonObject?.height}</p>
      </div>
      <div className="border border-gray-200 rounded-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Weight</h2>
        <p>{pokemonObject?.weight}</p>
      </div>
    </div>
  );
}
