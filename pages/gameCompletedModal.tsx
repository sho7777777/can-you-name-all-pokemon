import { useEffect, FC, useState } from 'react';
import { useReward } from 'react-rewards';
import { useRouter } from 'next/router';

type Props = {
  setIsGameCompleted: (isGameCompleted: boolean) => void;
  setShowRankingModal: (showRankingModal: boolean) => void
}

export const GameCompletedModal: FC<Props> = (props) => {

  const { setIsGameCompleted, setShowRankingModal } = props
  const { reward } = useReward('rewardId', 'confetti');
  const [stopReward, setStopReward] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // setIntervalだと初回実行も5秒後になるので、初回は別で実行
    reward();
    var i = 1
    const timerId = setInterval(() => {
      reward();
      i++;
      if (i == 3) clearInterval(timerId);
    }, 5000)
  }, [])

  const registerRanking = () => {
    setShowRankingModal(true);
    setIsGameCompleted(false);
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      <div className="relative bg-gray-200 max-w-md w-90 rounded z-30">
        <div className="flex justify-between items-center opacity-100">
          <h4 className="text-gray-600 text-2xl font-bold mx-auto">Congratulations!!</h4>
        </div>
        <p className="text-gray-600 text-lg mt-2 text-center">おめでとう！</p>
        <div className="flex justify-center items-center">
          {/* rewardを呼び出す */}
          <span id="rewardId" />
        </div>
        <p className="text-gray-600 text-lg mt-2 text-center">すべてのポケモンを英語でいうことができました！</p>
        <div className="flex justify-between my-2 mx-auto w-64 space-x-2">
          <button className="text-white bg-emerald-600 hover:bg-emerald-400 rounded p-1" onClick={registerRanking}>ランキング登録</button>
          <button className="back-to-top-btn" onClick={() => router.push('/')}>Topに戻る</button>
        </div>
      </div>
    </div>
  )
}
