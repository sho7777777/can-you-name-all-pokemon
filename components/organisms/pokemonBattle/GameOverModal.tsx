// Type
import { FC } from 'react';
import { GameOverOptionButtons } from "../../molecules/gameOverModal/GameOverOptionButtons";
import { ImgParts } from '../../molecules/gameOverModal/ImgParts';
import { YourScore } from '../../molecules/gameOverModal/YourScore';
import { PageTitle } from '../../atoms/PageTitle';
import { TitleParts } from '../../molecules/gameOverModal/TitleParts';

type Props = {
  correctAnswer: string;
  currentPokeNo: string;
  pokeOrigin: string;
  questionNo: number;
  shuffleFlg: boolean;
  setIsGameOver: (isGameOver: boolean) => void;
  setQuestionNo: (questionNo: number) => void;
  setShowRankingModal: (showRankingModal: boolean) => void;
  setShuffleFlg: (shuffleflg: boolean) => void;
}

export const GameOverModal: FC<Props> = (props) => {

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
