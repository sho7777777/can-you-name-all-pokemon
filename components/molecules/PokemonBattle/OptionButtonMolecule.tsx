

import React, { FC } from 'react'
import { ButtonAtom } from '../../atoms/ButtonAtom'

type Props = {
  option: string[],
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const OptionButtonMolecule: FC<Props> = (props) => {
  const { option, checkAnswer } = props
  return (
    <div className="flex flex-col justify-between items-center w-3/4 max-w-lg mx-auto gap-y-2 md:flex-row">
      <ButtonAtom style="btn-option" value={option[0]} onClick={checkAnswer} >{option[0]}</ButtonAtom>
      <ButtonAtom style="btn-option" value={option[1]} onClick={checkAnswer} >{option[1]}</ButtonAtom>
      <ButtonAtom style="btn-option" value={option[2]} onClick={checkAnswer} >{option[2]}</ButtonAtom>
      <ButtonAtom style="btn-option" value={option[3]} onClick={checkAnswer} >{option[3]}</ButtonAtom>
    </div>
  )
}

