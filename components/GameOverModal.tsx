// Hook
import { useRouter } from "next/router";

// Type
import { FC } from 'react';

type Props = {
  questionNo: number;
  setQuestionNo: (questionNo: number) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  shuffleFlg: boolean;
  setShuffleFlg: (shuffleflg: boolean) => void;
  setShowRankingModal: (showRankingModal: boolean) => void;
  currentPokemonNo: string;
  correctAnswer: string;
}

export const GameOverModal: FC<Props> = (props) => {

  const { questionNo, setQuestionNo, setIsGameOver, shuffleFlg, setShuffleFlg, setShowRankingModal, currentPokemonNo, correctAnswer } = props;
  const router = useRouter()

  const restart = () => {
    setQuestionNo(0);
    setIsGameOver(false);
    setShuffleFlg(!shuffleFlg)
  }

  const returnTopPage = () => {
    router.push('/')
  }

  const registerRanking = () => {
    setShowRankingModal(true);
    setIsGameOver(false);
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center z-10">
      <div className="relative bg-gray-200 rounded pt-4 w-96 h-2/5 mt-40">
        <div className="flex justify-between items-center opacity-100">
          <h4 className="text-gray-600 text-2xl font-bold mx-auto mt-4">Game Over...</h4>
        </div>
        <img src={`/pokedex/${currentPokemonNo}.png`} alt="" className='w-24 h-24 md:w-28 md:h-28 mx-auto mt-2' />
        <p className="text-center text-gray-600 mt-2">正解は <span className="text-red-600">{correctAnswer}</span> です。</p>
        <p className="text-gray-600 text-lg mt-2 text-center">あなたの記録は {questionNo} 匹です。</p>
        <div className="flex justify-between px-2 my-2 mx-2">
          <button className="btn-basic" onClick={restart}>再チャレンジ！</button>
          <button className="option-btn text-sm" onClick={registerRanking}>ランキング登録</button>
          <button className="btn-back-to-top" onClick={returnTopPage}>Topに戻る</button>
        </div>
      </div>
    </div>

  )
}
