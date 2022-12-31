import React, { FC } from 'react'
import { Button } from '../Button'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  style: string,
  text: string,
  value: string
}

export const SortButton: FC<Props> = (props) => {
  const { onClick, style, text, value } = props
  return (
    <Button onClick={onClick} buttonStyle={style} text={text} value={value} />
  )
}
