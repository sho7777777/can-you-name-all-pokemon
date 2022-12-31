import React, { FC } from 'react'

type Props = {
  questionNo: number
}

export const YourScore: FC<Props> = (props) => {
  const { questionNo } = props
  return (
    <>
      <p className="mt-2 text-gray-600 text-lg text-center">あなたの記録は <span className="text-red-600">{questionNo}</span> 匹です。</p>
    </>
  )
}
