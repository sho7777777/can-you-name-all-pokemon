import { FC } from 'react'

type Props = {
  alt: string,
  pokeNo: string,
  hover?: string,
  m: string,
  h: string,
  w: string,
  hMd?: string,
  wMd?: string,
  onClick?: () => void
}

export const PokeImgAtom: FC<Props> = (props) => {
  const { alt, pokeNo, hover, m, h, w, hMd, wMd, onClick } = props
  return (
    <img src={`/pokedex/${pokeNo}.png`} alt={alt} className={`${hover} ${m} ${h} ${w} ${hMd} ${wMd}`} onClick={onClick} />
  )
}
