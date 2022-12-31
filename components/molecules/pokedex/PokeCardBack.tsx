import React, { FC } from 'react'

type Props = {
  pokeNo: string,
  pokeNameEn: string,
  pokeOrigin: string
}

export const PokeCardBack: FC<Props> = (props) => {
  const { pokeNo, pokeNameEn, pokeOrigin } = props

  const getPokeAudio = (pokeNo: string) => {
    const url: string = `/prono/${pokeNo}.mp3`;
    return url;
  }

  const onClickPlay = (pokeNo: string) => {
    const audioUrl: string = getPokeAudio(pokeNo);
    const audio: HTMLAudioElement = new Audio(audioUrl)
    audio.play();
  }

  return (
    <div className="absolute w-60 h-full rounded mb-2 my-rotate-y-180 backface-hidden">
      <div className="h-3/5 flex bg-gradient-to-r from-pink-50 to-pink-200 items-center justify-center">
        <img src={`/pokedex/${pokeNo}.png`} alt="" className="m-auto hover:cursor-pointer w-28 h-28" onClick={() => onClickPlay(pokeNo)} />
      </div>
      <div className="p-2 mb-2 h-2/5 bg-gradient-to-r from-green-50 to-green-200 ">
        <p className="text-center">{pokeNameEn}</p>
        <p className="text-center text-sm mt-1">{pokeOrigin}</p>
      </div>
    </div>
  )
}

