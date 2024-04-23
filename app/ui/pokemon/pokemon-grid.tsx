"use client";
import React, { useState } from "react";
import PokemonCard from "./pokemon-card";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface PokemonGridProps {
  pokemonList: any;
}

export default function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredPokemonList = searchTermFilter(pokemonList);

  return (
    <>
      <div>
        <div className="relative flex flex-1 flex-shrink-0">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Bulbasaur, Pikachu..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {filteredPokemonList.map((pokemon: any) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} />
          ))}
        </div>
      </div>
    </>
  );
}
