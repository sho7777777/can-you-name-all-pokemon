import { useRouter } from 'next/router'
import React, { FC } from 'react'

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
      <button className="btn-basic" onClick={restart}>再チャレンジ！</button>
      <button className="option-btn text-sm" onClick={registerRanking}>ランキング登録</button>
      <button className="btn-back-to-top" onClick={returnTopPage}>Topに戻る</button>
    </div>
  )
}
