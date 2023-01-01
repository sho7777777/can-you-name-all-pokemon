import { LayoutTemplate } from '../components/templates/LayoutTemplate';
import { PokedexTemplate } from '../components/templates/PokedexTemplate';

import { loadPokemon } from '../lib/load-pokemon';

import { useRouter } from 'next/router';

import { Pokemon } from '../types/pokemon';

export default function Pokedex(props: { pokeList: Pokemon[] }) {

  const allPokemon: Pokemon[] = props.pokeList;

  return (
    <LayoutTemplate>
      <PokedexTemplate allPokemon={allPokemon} />
    </LayoutTemplate>
  )
}

export async function getStaticProps() {
  const router = useRouter();
  try {
    const pokeList: Pokemon[] = await loadPokemon()!;
    return {
      props: {
        pokeList
      }
    }
  } catch (err) {
    router.push('/500')
  }
}
