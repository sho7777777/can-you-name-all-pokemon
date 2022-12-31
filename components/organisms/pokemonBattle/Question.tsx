import React, { FC } from 'react'
import { PokeImg } from '../../atoms/PokeImg'
import { QuestionNo } from '../../atoms/QuestionNo'
import { QuestionPokeName } from '../../atoms/QuestionPokeName'
import { OptionButtons } from '../../molecules/pokemonBattle/OptionButtons'
import { PageTitle } from '../../atoms/PageTitle'
import { TitleArea } from '../pokedex/TitleArea'
import { TitleParts } from '../../molecules/pokemonBattle/TitleParts'
import { ImgParts } from '../../molecules/pokemonBattle/ImgParts'

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

