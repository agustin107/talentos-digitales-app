import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  url: string;
}

const getData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export async function PokemonCard({ name, url }: PokemonCardProps) {
  const data = await getData(url);

  return (
    <div className="rounded p-3 border border-solid border-black flex flex-col items-center justify-center gap-2">
      <Image
        src={data.sprites.front_default}
        height={200}
        width={200}
        alt={name}
      />
      {name}
    </div>
  );
}
