import React, { FC } from 'react'

type Props = {
  pokeNameJa: string
}

export const QuestionPokeName: FC<Props> = (props) => {
  const { pokeNameJa } = props
  return (
    <h2 className="my-2 text-center">{pokeNameJa}</h2>
  )
}
