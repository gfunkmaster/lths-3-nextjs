import Link from "next/link";
import React from "react";

interface PokemonCardProps {
  name: string;
}

const PokemonCard = ({ name }: PokemonCardProps) => {
  return (
    <Link href={`pokemon/${name}`} key={name + "-card"}>
      <p className="rounded-xl bg-gray-50 p-2 shadow-sm">
        {name.toUpperCase()}
      </p>
    </Link>
  );
};

export default PokemonCard;
