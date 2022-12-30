import React, { FC } from 'react'
import { Pokemon } from '../types/pokemon';

type Props = {
  pokemonList: Pokemon[];
}

export const PokemonCard: FC<Props> = (props) => {

  const { pokemonList } = props;

  const getPokeNo = (pokeNo: string) => {
    const url = `/prono/${pokeNo}.mp3`;
    return url;
  }

  const onClickPlay = (pokeNo: string) => {
    const audioUrl = getPokeNo(pokeNo);
    const audio = new Audio(audioUrl)
    audio.play();
  }

  return (
    <>
      {pokemonList.map((pokemon: Pokemon, index: number) => (
        <div key={index}>
          <div className="relative h-60 w-60 m-2 overflow-hidden rounded-md shadow-lg border group perspective">
            <div className="absolute w-full h-full preserve-3d group-hover:my-rotate-y-180 duration-700">
              <div className="absolute w-full h-full rounded mb-2 backface-hidden">
                <div className="h-3/5 flex bg-gradient-to-r from-pink-50 to-pink-200 items-center justify-center">
                  <img src={`/pokedex/${pokemon.No}.png`} alt="" className="m-auto w-28 h-28" />
                </div>
                <div className="py-6 mb-2 h-2/5 bg-gradient-to-r from-green-50 to-green-200">
                  <p className="text-center my-auto ">No. {pokemon.No}</p>
                  <p className="text-center">{pokemon.nameJa}</p>
                </div>
              </div>
              <div className="absolute w-60 h-full rounded mb-2 my-rotate-y-180 backface-hidden">
                <div className="h-3/5 flex bg-gradient-to-r from-pink-50 to-pink-200 items-center justify-center" >
                  <img src={`/pokedex/${pokemon.No}.png`} alt="" className="m-auto hover:cursor-pointer w-28 h-28" onClick={() => onClickPlay(pokemon.No)} />
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
    </>
  )
}
