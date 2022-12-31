import React, { FC } from 'react'
import { gameCompletedModalProps, gameOverModalProps, registerRankingModalProps } from '../../types/modal'
import { GameCompletedModal } from '../organisms/PokemonBattle/GameCompletedModal'
import { GameOverModal } from '../organisms/PokemonBattle/GameOverModal'
import { Question } from '../organisms/PokemonBattle/Question'
import { RegisterRankingModal } from '../organisms/PokemonBattle/RegisterRankingModal'

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
  gameCompletedModalProps: gameCompletedModalProps,
  registerRankingModalProps: registerRankingModalProps
}

export const PokemonBattleTemplate: FC<Props> = (props) => {
  const { questionProps, gameOverModalProps, gameCompletedModalProps, registerRankingModalProps } = props

  return (
    <>
      {gameOverModalProps.isGameOver && <GameOverModal  {...gameOverModalProps} />}
      {gameCompletedModalProps.isGameCompleted && <GameCompletedModal {...gameCompletedModalProps} />}
      {registerRankingModalProps.showRankingModal && <RegisterRankingModal {...registerRankingModalProps} />}
      <Question {...questionProps} />
    </>

  )
}
