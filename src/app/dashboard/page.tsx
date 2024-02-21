import { PokemonCard } from './PokemonCard';
import { Suspense } from 'react';
import Loading from './loading';

const getPokemones = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');

  if (response.ok) {
    const data = await response.json();

    return data.results;
  } else {
    return [];
  }
};

export default async function DashboardPage() {
  const pokemones = await getPokemones();

  return (
    <div className="flex flex-wrap justify-center pt-4 gap-2">
      {pokemones.map((pokemon: any) => (
        <Suspense fallback={<Loading />} key={pokemon.name}>
          <PokemonCard name={pokemon.name} url={pokemon.url} />
        </Suspense>
      ))}
    </div>
  );
}
