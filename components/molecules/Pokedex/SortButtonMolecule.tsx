import React, { FC } from 'react'
import { ButtonAtom } from '../../atoms/ButtonAtom'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  style: string,
  value: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const SortButtonMolecule: FC<Props> = (props) => {
  const { children, style, value, onClick } = props
  return (
    <>
      <ButtonAtom style={style} value={value} onClick={onClick}>{children}</ButtonAtom>
    </>
  )
}
