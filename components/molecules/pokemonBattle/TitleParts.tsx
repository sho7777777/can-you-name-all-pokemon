import React, { FC } from 'react'
import { QuestionNo } from '../../atoms/QuestionNo';
import { PageTitle } from '../../atoms/PageTitle'

type Props = {
  questionNo: number
}

export const TitleParts: FC<Props> = (props) => {
  const { questionNo } = props
  return (
    <>
      <PageTitle margin='my-4' textColor='text-gray-600' textPosition='text-center' textSize='text-2xl' textSizeMd='md:text-3xl' >言えるかな？</PageTitle>
      <QuestionNo questionNo={questionNo} />
    </>
  )
}
