// Type
import { FC } from 'react';
import { GameOverOptionButtons } from "./molecules/GameOverOptionButtons";

type Props = {
  questionNo: number;
  setQuestionNo: (questionNo: number) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  shuffleFlg: boolean;
  setShuffleFlg: (shuffleflg: boolean) => void;
  setShowRankingModal: (showRankingModal: boolean) => void;
  currentPokeNo: string;
  correctAnswer: string;
}

export const GameOverModal: FC<Props> = (props) => {

  const { questionNo, setQuestionNo, setIsGameOver, shuffleFlg, setShuffleFlg, setShowRankingModal, currentPokeNo, correctAnswer } = props;

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
      <div className="relative bg-gray-200 rounded pt-4 w-96 h-1/2 mt-40">
        <div className="flex justify-between items-center opacity-100">
          <h4 className="text-gray-600 text-2xl font-bold mx-auto mt-4">Game Over...</h4>
        </div>
        <img src={`/pokedex/${currentPokeNo}.png`} alt="" className='w-24 h-24 md:w-28 md:h-28 mx-auto mt-2' />
        <p className="text-center text-gray-600 mt-2">正解は <span className="text-red-600">{correctAnswer}</span> です。</p>
        <p className="text-gray-600 text-lg mt-2 text-center">あなたの記録は {questionNo} 匹です。</p>
        <GameOverOptionButtons restart={restart} registerRanking={registerRanking} />
      </div>
    </div>

  )
}
