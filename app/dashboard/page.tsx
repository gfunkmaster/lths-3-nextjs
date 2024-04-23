import RandomPokemon from "../components/random-pokemon";

export default async function Page() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl font-bold m-4 border-b-2 border-gray-300 pb-2">Dashboard</h1>
      <RandomPokemon />
    </div>
  );
}
