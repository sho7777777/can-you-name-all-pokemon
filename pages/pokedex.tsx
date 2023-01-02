import { LayoutTemplate } from "../components/templates/LayoutTemplate";
import { PokedexTemplate } from "../components/templates/PokedexTemplate";

import { loadPokemon } from "../lib/load-pokemon";

import { Pokemon } from "../types/pokemon";

export default function Pokedex(props: { pokeList: Pokemon[] }) {
  const allPokemon: Pokemon[] = props.pokeList;

  return (
    <LayoutTemplate>
      <PokedexTemplate allPokemon={allPokemon} />
    </LayoutTemplate>
  );
}

export async function getStaticProps() {
  const pokeList: Pokemon[] = await loadPokemon();
  return {
    props: {
      pokeList,
    },
  };
}
