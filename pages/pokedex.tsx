// Components
import { Layout } from '../components/Layout';
import { PokeCardArea } from '../components/organisms/pokedex/PokeCardArea';
import { SortArea } from '../components/organisms/pokedex/SortArea';
import { WarningPopUp } from '../components/WarningPopUp';

import { totalPokeNum, sortButtonProperties } from '../const/constants';

import { useEffect, useState } from 'react';

import { loadPokemon } from '../lib/load-pokemon';

import { Pokemon } from '../types/pokemon';
import { PageTitle } from '../components/atoms/PageTitle';
import { TitleArea } from '../components/organisms/pokedex/TitleArea';

export default function Pokedex(props: { pokeList: Pokemon[] }) {

  // Set aside all pokemon because pokeList changes by filtering.
  const allPokemon: Pokemon[] = props.pokeList;
  const [pokeList, setPokeList] = useState<Pokemon[]>(allPokemon)
  const [showWarningPopUp, setShowWarningPopUp] = useState<boolean>(true);

  // Hide volume warning popup while session is active.
  useEffect(() => {
    sessionStorage.getItem('showPopUp') && setShowWarningPopUp(false)
  })

  // Filter per 10 pokemons.
  const filterPokeFunc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const sortValue: number = parseInt((e.target as HTMLInputElement).value);
    const sortIndexForMew: number = 140;

    if (sortValue == totalPokeNum) {
      setPokeList(allPokemon)
    } else {
      let filteredPokeList: Pokemon[]
      if (sortValue == sortIndexForMew) {
        // Mew(No.151) is inclued in the last slice.
        filteredPokeList = allPokemon.slice(sortValue, sortValue + 11)
        setPokeList(filteredPokeList)
      } else {
        filteredPokeList = allPokemon.slice(sortValue, sortValue + 10)
        setPokeList(filteredPokeList)
      }
    }
  }

  return (
    <Layout>
      {showWarningPopUp && <WarningPopUp setShowWarningPopUp={setShowWarningPopUp} />}
      <TitleArea />
      <SortArea filterPokeFunc={filterPokeFunc} />
      <div className="container mx-auto bg-slate-500">
        <div className="relative mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PokeCardArea pokeList={pokeList} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const pokeList: Pokemon[] = await loadPokemon()!;
    return {
      props: {
        pokeList
      }
    }
  } catch (err) {
    console.error(err)
  }
}
