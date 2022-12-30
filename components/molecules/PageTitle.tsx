import React, { FC } from 'react'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  margin: string,
  textColor?: string,
  textSize: string,
  textSizeMd: string,
}

export const PageTitle: FC<Props> = (props) => {
  const { children, margin, textColor, textSize, textSizeMd, } = props
  return (
    <h1 className={`${margin} ${textColor} ${textSize} md:${textSizeMd} text-center`}>
      {children}
    </h1>
  )
}
