import { FC } from 'react'
import { QuestionNoAtom } from '../../atoms/QuestionNoAtom';
import { PageTitleAtom } from '../../atoms/PageTitleAtom'

type Props = {
  questionNo: number
}

export const TitleMolecule: FC<Props> = (props) => {
  const { questionNo } = props
  return (
    <>
      <PageTitleAtom margin='my-4' textColor='text-gray-600' textPosition='text-center' textSize='text-2xl' textSizeMd='md:text-2xl' >言えるかな？</PageTitleAtom>
      <QuestionNoAtom questionNo={questionNo} />
    </>
  )
}
