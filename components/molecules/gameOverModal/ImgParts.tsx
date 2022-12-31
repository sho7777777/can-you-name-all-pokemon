import React, { FC } from 'react'
import { PokeImg } from '../../atoms/PokeImg'

type Props = {
  correctAnswer: string,
  currentPokeNo: string,
  pokeOrigin: string,
}

export const ImgParts: FC<Props> = (props) => {
  const { correctAnswer, currentPokeNo, pokeOrigin } = props
  return (
    <>
      <PokeImg alt='pokemon' pokeNo={currentPokeNo} m='mx-auto' h='h-24' w='w-24' hMd='h-28' wMd='w-28' />
      <p className="text-center text-gray-600">正解は <span className="text-red-600">{correctAnswer}</span> です。</p>
      <p className='text-center'>由来：<span className='text-red-600'>{pokeOrigin}</span></p>
    </>
  )
}
