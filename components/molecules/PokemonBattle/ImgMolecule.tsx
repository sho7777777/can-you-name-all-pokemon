import React, { FC } from 'react'
import { PokeImgAtom } from '../../atoms/PokeImgAtom'
import { QuestionPokeNameAtom } from '../../atoms/QuestionPokeNameAtom'

type Props = {
  currentPokeNo: string,
  pokeNameJa: string
}

export const ImgMolecule: FC<Props> = (props) => {
  const { currentPokeNo, pokeNameJa } = props
  return (
    <>
      <PokeImgAtom alt='pokemon' pokeNo={currentPokeNo} m='mx-auto' h='h-24' w='w-24' hMd='h-28' wMd='w-28' />
      <QuestionPokeNameAtom pokeNameJa={pokeNameJa} />
    </>
  )
}
