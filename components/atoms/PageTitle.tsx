import React, { FC } from 'react'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  margin: string,
  textColor?: string,
  textPosition?: string,
  textSize: string,
  textSizeMd: string,
}

export const PageTitle: FC<Props> = (props) => {
  const { children, margin, textColor, textPosition, textSize, textSizeMd } = props
  return (
    <h1 className={`${margin} ${textColor} ${textPosition} ${textSize} ${textSizeMd}`}>{children}</h1>
  )
}
