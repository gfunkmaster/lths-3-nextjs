import { fetchAllPokemons } from "@/app/lib/api";
import PokemonGrid from "@/app/ui/pokemon/pokemon-grid";

export default async function Page() {
  const pokemonList = await fetchAllPokemons();
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center border-b-2 border-gray-300 pb-2">
        Pokemon
      </h1>

      <PokemonGrid pokemonList={pokemonList} />
    </>
  );
}
