import React, { FC } from 'react'
import { sortButtonProperties } from '../../../const/constants'
import { Button } from '../../Button'
import { SortButton } from '../../molecules/SortButton';

type Props = {
  filterPokeFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SortArea: FC<Props> = (props) => {

  const { filterPokeFunc } = props;

  return (
    <div className="container grid grid-cols-4 mx-auto text-center md:grid-cols-8">
      {sortButtonProperties.map((buttonProperty, index) => (
        <SortButton key={index} onClick={filterPokeFunc} style='btn-sort' text={buttonProperty.text} value={buttonProperty.value} />
      ))}
    </div>
  )
}

