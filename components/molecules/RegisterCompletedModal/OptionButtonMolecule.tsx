import { FC } from 'react'
import { useRouter } from 'next/router';
import { OptBtnForRegiRankModalProps } from '../../../types/button';
import { ButtonAtom } from '../../atoms/ButtonAtom';

export const OptionButtonMolecule: FC<OptBtnForRegiRankModalProps> = (props) => {
  const { shuffleFlg, setIsGameOver, setQuestionNo, setShuffleFlg, setShowRankingModal } = props
  const router = useRouter();

  const restart = () => {
    setQuestionNo(0);
    setIsGameOver(false);
    setShuffleFlg(!shuffleFlg)
    setShowRankingModal(false);
  }

  const goToRankPage = () => router.push('/ranking')
  const goToTopPage = () => router.push('/')

  return (
    <div className="flex flex-row justify-between w-full mx-auto ">
      <ButtonAtom style="btn-register" onClick={goToRankPage}>ランキングをみる</ButtonAtom>
      <ButtonAtom style="btn-basic" onClick={restart}>再チャレンジ！</ButtonAtom>
      <ButtonAtom style="btn-back-to-top" onClick={goToTopPage}>Topに戻る</ButtonAtom>
    </div>
  )
}
