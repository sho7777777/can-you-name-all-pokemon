import React, { FC } from 'react'
import { gameCompletedModalProps, gameOverModalProps, registerRankingModalProps } from '../../types/modal'
import { GameCompletedModal } from '../organisms/pokemonBattle/GameCompletedModal'
import { GameOverModal } from '../organisms/pokemonBattle/GameOverModal'
import { Question } from '../organisms/pokemonBattle/Question'
import { RegisterRankingModal } from '../organisms/pokemonBattle/RegisterRankingModal'

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
