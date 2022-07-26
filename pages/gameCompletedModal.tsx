import { useCallback, useEffect, useState, useRef } from 'react';
import { useReward } from 'react-rewards';

export const GameCompletedModal = (props) => {

  const { setGameCompleted, setShowRankingModal } = props

  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  useEffect(() => {
    reward();
    setInterval(reward, 5000);
  }, [])

  const registerRanking = () => {
    setShowRankingModal(true);
    setGameCompleted(false);

  }


  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">


      <div className="relative bg-gray-200 max-w-md w-90 rounded z-30">


        <div className="flex justify-between items-center opacity-100">
          <h4 className="text-gray-600 text-2xl font-bold mx-auto">Congratulations!!</h4>
        </div>
        <p className="text-gray-600 text-lg mt-2 text-center">おめでとう！</p>
        <div className="flex justify-center items-center">
          <span id="rewardId" />
        </div>
        <p className="text-gray-600 text-lg mt-2 text-center">すべてのポケモンを英語で言うことができました！</p>
        <div className="flex justify-between my-2 mx-auto w-64 space-x-2">
          <button className="text-white bg-emerald-600 hover:bg-emerald-400 rounded p-1" onClick={registerRanking}>ランキング登録</button>
          <button className="text-black bg-red-500 hover:bg-red-400 rounded p-1" >Topに戻る</button>
        </div>
      </div>
    </div>
  )
}
