import React, { FC } from 'react'
import { sortButtonProperties } from '../const/constants'
import { Button } from './Button'

type Props = {
  filterPokeFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SortArea: FC<Props> = (props) => {

  const { filterPokeFunc } = props;

  return (
    <div className="container grid grid-cols-4 mx-auto text-center md:grid-cols-8">
      {sortButtonProperties.map((buttonProperty, index) => (
        <Button key={index} buttonStyle='btn-sort' onClick={filterPokeFunc} value={buttonProperty.value} text={buttonProperty.text} />
      ))}
    </div>
  )
}

