

import React, { FC } from 'react'

type Props = {
  option: string[],
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const OptionButtonMolecule: FC<Props> = (props) => {
  const { option, checkAnswer } = props
  return (
    <div className="flex flex-col justify-between items-center w-3/4 max-w-lg mx-auto gap-y-2 md:flex-row">
      <button type="button" value={option[0]} onClick={checkAnswer} className="option-btn">{option[0]}</button>
      <button type="button" value={option[1]} onClick={checkAnswer} className="option-btn">{option[1]}</button>
      <button type="button" value={option[2]} onClick={checkAnswer} className="option-btn">{option[2]}</button>
      <button type="button" value={option[3]} onClick={checkAnswer} className="option-btn">{option[3]}</button>
    </div>
  )
}

