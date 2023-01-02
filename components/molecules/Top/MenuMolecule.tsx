import Link from 'next/link'
import { FC } from 'react'
import { MenuCursorAtom } from '../../atoms/MenuCursorAtom'
import { MenuCursorPingAtom } from '../../atoms/MenuCursorPingAtom'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  link: string
}

export const MenuMolecule: FC<Props> = (props) => {
  const { children, link } = props
  return (
    <div className='flex group'>
      <MenuCursorAtom />
      <MenuCursorPingAtom />
      <Link href={link}><p className=''>{children}</p></Link>
    </div>
  )
}
