import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { ButtonAtom } from '../../atoms/ButtonAtom'

type Props = {
  restart: () => void,
  registerRanking: () => void
}

export const OptionButtonMolecule: FC<Props> = (props) => {
  const { restart, registerRanking } = props
  const router = useRouter()
  const returnTopPage = () => router.push('/')

  return (
    <div className="flex justify-between px-2 my-2 mx-2">
      <ButtonAtom style="btn-basic" onClick={restart}>再チャレンジ！</ButtonAtom>
      <ButtonAtom style="btn-register" onClick={registerRanking}>ランキング登録</ButtonAtom>
      <ButtonAtom style="btn-back-to-top" onClick={returnTopPage}>Topに戻る</ButtonAtom>
    </div>
  )
}
