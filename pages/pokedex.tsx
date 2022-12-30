// Components
import { Layout } from '../components/Layout';
import { PokeCard } from '../components/PokeCard';
import { SortArea } from '../components/SortArea';
import { WarningPopUp } from '../components/WarningPopUp';

import { totalPokeNum, sortButtonProperties, pokedex } from '../const/constants';

import { useEffect, useState } from 'react';

import { loadPokemon } from '../lib/load-pokemon';

import { Pokemon } from '../types/pokemon';
import { PageTitle } from '../components/molecules/PageTitle';

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
        // Mew is inclued in the last slice.
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
      <PageTitle margin='my-3' textColor='text-gray-600' textSize='text-2xl' textSizeMd='text-3xl'>{pokedex}</PageTitle>
      <SortArea filterPokeFunc={filterPokeFunc} />
      <div className="container mx-auto bg-slate-500">
        <div className="relative mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PokeCard pokeList={pokeList} />
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
