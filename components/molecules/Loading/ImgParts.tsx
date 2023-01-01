import React from 'react'
import { PokeImg } from '../../atoms/PokeImg'

export const ImgParts = () => {
  return (
    <div>
      <div className="animate-bounce">
        <PokeImg alt="loading" pokeNo="025" m="" h="h-24" w="w-24" hMd="md:h-28" wMd="md:w-28" />
      </div>
      <p className="text-white">Now Loading...</p>
    </div>
  )
}
