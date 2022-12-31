// Components
import { GameOverOptionButtons } from "../../molecules/GameOverModal/GameOverOptionButtons";
import { ImgParts } from '../../molecules/GameOverModal/ImgParts';
import { YourScore } from '../../molecules/GameOverModal/YourScore';
import { TitleParts } from '../../molecules/GameOverModal/TitleParts';

// Types
import { FC } from 'react';
import { gameOverModalProps } from '../../../types/modal';

export const GameOverModal: FC<gameOverModalProps> = (props) => {

  const { correctAnswer, currentPokeNo, pokeOrigin, questionNo, shuffleFlg, setIsGameOver, setQuestionNo, setShowRankingModal, setShuffleFlg } = props;

  const restart = () => {
    setQuestionNo(0);
    setIsGameOver(false);
    setShuffleFlg(!shuffleFlg)
  }

  const registerRanking = () => {
    setShowRankingModal(true);
    setIsGameOver(false);
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center z-10">
      <div className="relative bg-gray-200 rounded pt-2 w-96 h-1/2 mt-40">
        <TitleParts />
        <ImgParts correctAnswer={correctAnswer} currentPokeNo={currentPokeNo} pokeOrigin={pokeOrigin} />
        <YourScore questionNo={questionNo} />
        <GameOverOptionButtons restart={restart} registerRanking={registerRanking} />
      </div>
    </div>

  )
}
