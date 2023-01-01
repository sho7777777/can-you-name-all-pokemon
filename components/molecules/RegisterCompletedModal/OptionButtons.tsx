import React, { FC } from 'react'
import { useRouter } from 'next/router';
import { OptionButtonForRegiRankModalProps } from '../../../types/button';

export const OptionButtons: FC<OptionButtonForRegiRankModalProps> = (props) => {
  const { shuffleFlg, setIsGameOver, setQuestionNo, setShuffleFlg, setShowRankingModal } = props
  const router = useRouter();

  const restart = () => {
    setQuestionNo(0);
    setIsGameOver(false);
    setShuffleFlg(!shuffleFlg)
    setShowRankingModal(false);
  }

  const goToTopPage = () => router.push('/')

  return (
    <div className="flex flex-row justify-between w-full mx-auto ">
      <button type="button" className="btn-sort bg-indigo-400 hover:text-black hover:bg-indigo-300 text-sm" onClick={() => router.push('/ranking')}>ランキングをみる</button>
      <button type="button" className="btn-basic" onClick={restart}>再チャレンジ！</button>
      <button type="button" className="btn-back-to-top" onClick={goToTopPage}>Topに戻る</button>
    </div>
  )
}
