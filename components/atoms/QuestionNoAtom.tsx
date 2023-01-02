import React, { FC } from 'react'

type Props = {
  questionNo: number
}

export const QuestionNoAtom: FC<Props> = (props) => {
  const { questionNo } = props
  return (
    <p className="text-2xl text-center mb-4 text-gray-600">現在 {questionNo} / 151 ひき</p>
  )
}

