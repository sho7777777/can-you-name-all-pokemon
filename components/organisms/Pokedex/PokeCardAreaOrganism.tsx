import { FC } from 'react'
import { CardBackMolecule } from '../../molecules/Pokedex/Card/CardBackMolecule';
import { CardFrontMolecule } from '../../molecules/Pokedex/Card/CardFrontMolecule';
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
              <CardFrontMolecule pokeNo={pokemon.No} pokeNameJa={pokemon.nameJa} />
              <CardBackMolecule pokeNo={pokemon.No} pokeNameEn={pokemon.nameEn} pokeOrigin={pokemon.origin} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
