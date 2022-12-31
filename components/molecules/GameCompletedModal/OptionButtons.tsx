import React, { FC } from 'react'
import { useRouter } from 'next/router';
import { gameCompletedModalProps } from '../../../types/modal';

export const OptionButtons: FC<gameCompletedModalProps> = (props) => {
  const { setIsGameCompleted, setShowRankingModal } = props
  const router = useRouter();

  const registerRanking = () => {
    setShowRankingModal(true);
    setIsGameCompleted(false);
  }

  return (
    <div className="flex justify-between my-2 mx-auto w-64 space-x-2">
      <button className="btn-basic" onClick={registerRanking}>ランキング登録</button>
      <button className="btn-back-to-top" onClick={() => router.push('/')}>Topに戻る</button>
    </div>
  )
}
