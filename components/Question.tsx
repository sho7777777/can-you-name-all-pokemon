import React, { FC } from 'react'
import { OptionButtons } from './molecules/OptionButtons'

type Props = {
  questionNo: number,
  currentPokeNo: string,
  pokeNameJa: string,
  option: string[],
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Question: FC<Props> = (props) => {
  const { questionNo, currentPokeNo, pokeNameJa, option, checkAnswer } = props
  return (
    <div className="h-screen pt-20 md:pt-32">
      <p className="text-3xl text-center my-4 text-gray-600">言えるかな？</p>
      <p className="text-2xl text-center mb-2 text-gray-600">現在 {questionNo} / 151 ひき</p>

      <div className="mx-auto w-24 h-24 md:h-28 md:w-28">
        <img src={`/pokedex/${currentPokeNo}.png`} alt="" className='w-24 h-24 md:w-28 md:h-28' />
      </div>

      <h2 className="text-center my-2">{pokeNameJa}</h2>
      <OptionButtons option={option} checkAnswer={checkAnswer} />
    </div>
  )
}

