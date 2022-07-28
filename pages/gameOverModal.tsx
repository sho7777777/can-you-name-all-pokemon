import { useRouter } from "next/router";
import { FC } from 'react';
import { useShuffle } from '../hooks/useShuffle';

type Props = {
  questionNo: number;
  setQuestionNo: (questionNo: number) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  shuffleFlg: boolean;
  setShuffleFlg: (shuffleflg: boolean) => void;
}

export const GameOverModal: FC<Props> = (props) => {

  const { questionNo, setQuestionNo, setIsGameOver, shuffleFlg, setShuffleFlg } = props;
  const router = useRouter()
  const { doShuffle } = useShuffle();

  const restart = () => {
    setQuestionNo(0);
    setIsGameOver(false);
    setShuffleFlg(!shuffleFlg)
  }

  const returnTopPage = () => {
    router.push('/');
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      <div className="relative bg-gray-200 max-w-sm w-3/5 h-1/5 rounded pt-4">
        <div className="flex justify-between items-center opacity-100">
          <h4 className="text-gray-600 text-2xl font-bold mx-auto">Game Over...</h4>
        </div>
        <p className="text-gray-600 text-lg mt-2 text-center">あなたの記録は {questionNo} 匹です。</p>
        <div className="flex justify-between px-12 my-2 mx-5 ">
          <button className="text-white bg-emerald-600 hover:bg-emerald-400 rounded p-1" onClick={restart}>再チャレンジ！</button>
          <button className="text-black bg-red-500 hover:bg-red-400 rounded p-1" onClick={returnTopPage}>Topに戻る</button>
        </div>
      </div>
    </div>

  )
}
