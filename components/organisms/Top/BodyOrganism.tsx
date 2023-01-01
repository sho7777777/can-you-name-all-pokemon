import React from 'react'
import { PageTitle } from '../../atoms/PageTitle'
import { SwipeParts } from '../../molecules/Top/SwipeParts'

export const BodyOrganism = () => {
  return (
    <>
      <PageTitle margin='m-4' textColor='text-gray-600' textPosition='text-center' textSize='text-2xl' textSizeMd='md:text-3xl'>ポケモン（英語で）言えるかな？</PageTitle>
      <SwipeParts />
    </>
  )
}
