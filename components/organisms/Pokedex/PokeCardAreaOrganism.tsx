import React, { FC } from 'react'
import { PokeCardBack } from '../../molecules/Pokedex/PokeCardBack';
import { PokeCardFront } from '../../molecules/Pokedex/PokeCardFront';
import { Pokemon } from '../../../types/pokemon';

type Props = {
  pokeList: Pokemon[];
}

export const PokeCardAreaOrganism: FC<Props> = (props) => {
  const { pokeList } = props;

  return (
    <>
      {pokeList.map((pokemon: Pokemon) => (
        <div key={pokemon.No}>
          <div className="relative h-60 w-60 m-2 overflow-hidden rounded-md shadow-lg border group perspective">
            <div className="absolute w-full h-full preserve-3d group-hover:my-rotate-y-180 duration-700">
              <PokeCardFront pokeNo={pokemon.No} pokeNameJa={pokemon.nameJa} />
              <PokeCardBack pokeNo={pokemon.No} pokeNameEn={pokemon.nameEn} pokeOrigin={pokemon.origin} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
