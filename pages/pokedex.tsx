// Component
import Image from 'next/image';
import { Layout } from '../components/Layout';

// Constant
import { totalPokemon, sortButtonProperty } from '../const/constants';

// Hook
import { useState } from 'react';

// lib
import { loadPokemon } from '../lib/load-pokemon';

// Type
import { Pokemon } from '../types/pokemon';
import { Button } from '../components/Button';


export default function Pokedex(pokemon: { pokemonList: Pokemon[]; }) {

  const [pokemonList, setPokemonList] = useState(pokemon.pokemonList)
  const allPokemon = pokemon.pokemonList;

  // 10匹ずつフィルタリング
  const filterPokemon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const sortValue = parseInt((e.target as HTMLInputElement).value);
    const sortIndexForMew = 140;

    if (sortValue == totalPokemon) {
      setPokemonList(allPokemon)
    } else {
      const pokemonListForSlice = pokemon.pokemonList;
      if (sortValue == sortIndexForMew) {
        // 最後のスライスはミュウ(151匹目）まで含める
        const slicedPokemonList = pokemonListForSlice.slice(sortValue, sortValue + 11)
        setPokemonList(slicedPokemonList)
      } else {
        const slicedPokemonList = pokemonListForSlice.slice(sortValue, sortValue + 10)
        setPokemonList(slicedPokemonList)
      }
    }
  }

  return (
    <div>
      <Layout>
        <h1 className="text-3xl text-gray-600 text-center  my-3">ポケモンずかん</h1>

        {/* ---Sort Area---  */}
        <div className="container grid grid-cols-4 mx-auto text-center md:grid-cols-8">
          {sortButtonProperty.map((buttonProperty, index) => (
            <Button key={index} buttonStyle='btn-sort' onClick={filterPokemon} value={buttonProperty.value} text={buttonProperty.text} />
          ))}
        </div>

        {/* ---Pokedex--- */}
        <div className="container mx-auto">
          <div className="relative mx-auto grid grid-cols-1 bg-violet-300 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pokemonList.map((pokemon: Pokemon, index: number) => (
              <div key={index}>
                <div className="relative h-60 w-60 m-2 overflow-hidden rounded-md shadow-lg border group perspective">
                  <div className="absolute w-full h-full preserve-3d group-hover:my-rotate-y-180 duration-700">
                    <div className="absolute w-full h-full rounded mb-2 backface-hidden">
                      <div className="h-3/5 flex bg-gradient-to-r from-pink-50 to-pink-200 items-center justify-center">
                        <Image src={`/pokedex/${pokemon.No}.png`} width={100} height={100} alt="pokemon" className="m-auto" />
                      </div>
                      <div className="py-6 mb-2 h-2/5 bg-gradient-to-r from-green-50 to-green-200">
                        <p className="text-center my-auto ">No. {pokemon.No}</p>
                        <p className="text-center">{pokemon.nameJa}</p>
                      </div>
                    </div>
                    <div className="absolute w-60 h-full rounded mb-2 my-rotate-y-180 backface-hidden">
                      <div className="h-3/5 flex bg-gradient-to-r from-pink-50 to-pink-200 items-center justify-center"
                      >
                        <Image src={`/pokedex/${pokemon.No}.png`} width={100} height={100} alt="pokemon" className="m-auto"
                        />
                      </div>
                      <div className="p-2 mb-2 h-2/5 bg-gradient-to-r from-green-50 to-green-200 ">
                        <p className="text-center">{pokemon.nameEn}</p>
                        <p className="text-center text-sm mt-1">{pokemon.origin}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {

  const pokemonList: Pokemon[] = [];

  try {
    const pokemonList = await loadPokemon();
    return {
      props: {
        pokemonList
      }
    }
  } catch (err) {
    console.error(err)
  }
}
