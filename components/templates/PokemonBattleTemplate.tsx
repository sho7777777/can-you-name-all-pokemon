import React, { FC } from 'react'
import { GameOverModal } from '../organisms/pokemonBattle/GameOverModal'
import { Question } from '../organisms/pokemonBattle/Question'

type questionProps = {
  currentPokeNo: string,
  option: string[],
  pokeNameJa: string,
  questionNo: number,
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type Props = {
  questionProps: questionProps
}

export const PokemonBattleTemplate: FC<questionProps> = (props) => {
  // const { questionProps } = props

  return (
    <>
      {/* <GameOverModal /> */}
      {/* <Question {...questionProps} /> */}
    </>

  )
}
