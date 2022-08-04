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
}

export const GameOverModal: FC<Props> = (props) => {

  const { questionNo, setQuestionNo, setIsGameOver, shuffleFlg, setShuffleFlg, setShowRankingModal } = props;
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
      <div className="relative bg-gray-200 rounded pt-4 w-96 h-36 mt-40">
        <div className="flex justify-between items-center opacity-100">
          <h4 className="text-gray-600 text-2xl font-bold mx-auto">Game Over...</h4>
        </div>
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
