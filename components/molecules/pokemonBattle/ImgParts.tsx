import React, { FC } from 'react'
import { PokeImg } from '../../atoms/PokeImg'
import { QuestionPokeName } from '../../atoms/QuestionPokeName'

type Props = {
  currentPokeNo: string,
  pokeNameJa: string
}

export const ImgParts: FC<Props> = (props) => {
  const { currentPokeNo, pokeNameJa } = props
  return (
    <>
      <PokeImg alt='pokemon' pokeNo={currentPokeNo} m='mx-auto' h='h-24' w='w-24' hMd='h-28' wMd='w-28' />
      <QuestionPokeName pokeNameJa={pokeNameJa} />
    </>
  )
}
