import { getPokemones } from '@/data/pokemon';
import { useRouter } from 'next/navigation';
import cookies from 'nookies';
import { PokemonCard } from './PokemonCard';
import { Suspense } from 'react';
import Loading from './loading';

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
