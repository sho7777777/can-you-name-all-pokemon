import Link from 'next/link'
import React, { FC } from 'react'
import { MenuCursor } from '../../atoms/MenuCursor'
import { MenuCursorPing } from '../../atoms/MenuCursorPing'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  link: string
}

export const MenuParts: FC<Props> = (props) => {
  const { children, link } = props
  return (
    <div className='flex group'>
      <MenuCursor />
      <MenuCursorPing />
      <Link href={link}><p className=''>{children}</p></Link>
    </div>
  )
}
