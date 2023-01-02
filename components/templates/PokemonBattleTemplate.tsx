// Components
import { GameCompModalOrganism } from '../organisms/PokemonBattle/GameCompModalOrganism'
import { GameOverModalOrganism } from '../organisms/PokemonBattle/GameOverModalOrganism'
import { QuestionOrganism } from '../organisms/PokemonBattle/QuestionOrganism'
import { RegiRankModalOrganism } from '../organisms/PokemonBattle/RegiRankModalOrganism'

import React, { FC } from 'react'
import { gameCompModalProps, gameOverModalProps, registerRankingModalProps } from '../../types/modal'

type questionProps = {
  currentPokeNo: string,
  option: string[],
  pokeNameJa: string,
  questionNo: number,
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

type Props = {
  questionProps: questionProps,
  gameOverModalProps: gameOverModalProps,
  gameCompletedModalProps: gameCompModalProps,
  registerRankingModalProps: registerRankingModalProps
}

export const PokemonBattleTemplate: FC<Props> = (props) => {
  const { questionProps, gameOverModalProps, gameCompletedModalProps, registerRankingModalProps } = props

  return (
    <>
      {gameCompletedModalProps.isGameCompleted && <GameCompModalOrganism {...gameCompletedModalProps} />}
      {gameOverModalProps.isGameOver && <GameOverModalOrganism  {...gameOverModalProps} />}
      {registerRankingModalProps.showRankingModal && <RegiRankModalOrganism {...registerRankingModalProps} />}
      <QuestionOrganism {...questionProps} />
    </>

  )
}
