import React, { FC } from 'react'
import { OptionButtons } from '../../molecules/PokemonBattle/OptionButtons'
import { TitleParts } from '../../molecules/PokemonBattle/TitleParts'
import { ImgParts } from '../../molecules/PokemonBattle/ImgParts'

type Props = {
  questionNo: number,
  currentPokeNo: string,
  pokeNameJa: string,
  option: string[],
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Question: FC<Props> = (props) => {
  const { questionNo, currentPokeNo, pokeNameJa, option, checkAnswer } = props
  return (
    <div className="h-screen pt-20 md:pt-32">
      <TitleParts questionNo={questionNo} />
      <ImgParts currentPokeNo={currentPokeNo} pokeNameJa={pokeNameJa} />
      <OptionButtons option={option} checkAnswer={checkAnswer} />
    </div>
  )
}

