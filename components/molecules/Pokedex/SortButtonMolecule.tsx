import React, { FC } from 'react'
import { Button } from '../../atoms/Button'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  style: string,
  text: string,
  value: string
}

export const SortButtonMolecule: FC<Props> = (props) => {
  const { onClick, style, text, value } = props
  return (
    <>
      <Button onClick={onClick} style={style} text={text} value={value} />
    </>
  )
}
