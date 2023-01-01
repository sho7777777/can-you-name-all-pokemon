import React, { FC, useEffect, useState } from 'react'
import { totalPokeNum } from '../../const/constants'
import { Pokemon } from '../../types/pokemon'
// Organism
import { PokeCardAreaOrganism } from '../organisms/Pokedex/PokeCardAreaOrganism'
import { SortAreaOrganism } from '../organisms/Pokedex/SortAreaOrganism'
import { TitleAreaOrganism } from '../organisms/Pokedex/TitleAreaOrganism'
import { WarningPopUpOrganism } from '../organisms/Pokedex/WarningPopUpOrganism'

type Props = {
  allPokemon: Pokemon[]
}

export const PokedexTemplate: FC<Props> = (props) => {
  const { allPokemon } = props

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
    <>
      {showWarningPopUp && <WarningPopUpOrganism setShowWarningPopUp={setShowWarningPopUp} />}
      <TitleAreaOrganism />
      <SortAreaOrganism filterPokeFunc={filterPokeFunc} />
      <div className="container mx-auto">
        <div className="relative mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PokeCardAreaOrganism pokeList={pokeList} />
        </div>
      </div>
    </>
  )
}

