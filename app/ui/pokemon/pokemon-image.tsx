import Image from "next/image";

interface PokemonImageProps {
  src: string | null; 
  alt: string; 
}

const PokemonImage: React.FC<PokemonImageProps> = ({ src, alt }) => {
  return (
    <div className="w-48 h-48 mx-auto mb-4">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          quality={100}
          className="rounded-full"
        />
      ) : (
        <p className="text-gray-500">No image available</p>
      )}
    </div>
  );
};

export default PokemonImage;
