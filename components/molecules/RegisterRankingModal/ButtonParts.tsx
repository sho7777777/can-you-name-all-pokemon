import React, { FC } from 'react'
import { Button } from '../../Button'

type Props = {
  registerRanking: () => void,
  isButtonDisabled: boolean,
  buttonStyle: string,
}

export const ButtonParts: FC<Props> = (props) => {
  const { registerRanking, isButtonDisabled, buttonStyle } = props
  return (
    <>
      <Button onClick={registerRanking} isButtonDisabled={isButtonDisabled} buttonStyle={buttonStyle} text="とうろく" />
    </>
  )
}
