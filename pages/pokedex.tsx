
import { Layout } from '../components/Layout';
import { WarningPopUp } from '../components/WarningPopUp';

import { totalPokeNum, sortButtonProperties, pokedex } from '../const/constants';

import { useEffect, useState, useContext } from 'react';

import { loadPokemon } from '../lib/load-pokemon';

import { Pokemon } from '../types/pokemon';
import { Button } from '../components/Button';
import { SortArea } from '../components/SortArea';
import { PokemonCard } from '../components/PokemonCard';

export default function Pokedex(pokemon: { pokemonList: Pokemon[]; }) {

  const [pokemonList, setPokemonList] = useState(pokemon.pokemonList)
  const allPokemon = pokemon.pokemonList;
  const [showWarningPopUp, setShowWarningPopUp] = useState<boolean>(true);

  // セッションが有効な間は音量注意のポップアップを表示しない
  useEffect(() => {
    sessionStorage.getItem('showPopUp') && setShowWarningPopUp(false)
  })

  // 10匹ずつフィルタリング
  const filterPokemonFunc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const sortValue = parseInt((e.target as HTMLInputElement).value);
    const sortIndexForMew: number = 140;

    if (sortValue == totalPokeNum) {
      setPokemonList(allPokemon)
    } else {
      const pokemonListForSlice = pokemon.pokemonList;
      if (sortValue == sortIndexForMew) {
        // 最後のスライスはミュウ(151匹目）まで含める
        const slicedPokemonList: Pokemon[] = pokemonListForSlice.slice(sortValue, sortValue + 11)
        setPokemonList(slicedPokemonList)
      } else {
        const slicedPokemonList = pokemonListForSlice.slice(sortValue, sortValue + 10)
        setPokemonList(slicedPokemonList)
      }
    }
  }

  // const getPokeNo = (pokeNo: string) => {
  //   const url = `/prono/${pokeNo}.mp3`;
  //   return url;
  // }

  // const onClickPlay = (pokeNo: string) => {
  //   const audioUrl = getPokeNo(pokeNo);
  //   const audio = new Audio(audioUrl)
  //   audio.play();
  // }

  return (
    <div>
      <Layout>
        {showWarningPopUp && <WarningPopUp setShowWarningPopUp={setShowWarningPopUp} />}
        <h1 className="text-3xl text-gray-600 text-center mb-3">{pokedex}</h1>

        <SortArea filterPokemonFunc={filterPokemonFunc} />

        {/* ---Pokedex--- */}
        <div className="container mx-auto bg-slate-500">
          <div className="relative mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <PokemonCard pokemonList={pokemonList} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {

  try {
    const pokemonList: Pokemon[] = await loadPokemon()!;
    return {
      props: {
        pokemonList
      }
    }
  } catch (err) {
    console.error(err)
  }
}
