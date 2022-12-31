import React from 'react'
import { PageTitle } from '../../atoms/PageTitle'

export const TitleParts = () => {
  return (
    <>
      <div>
        <PageTitle margin='mt-4' textColor='text-gray-600' textPosition='text-center' textSize='text-2xl font-bold' textSizeMd='text-2xl' >Congratulations!!</PageTitle>
      </div>
      <PageTitle margin='mt-2' textColor='text-gray-600' textPosition='text-center' textSize='text-xl' textSizeMd='text-xl' >おめでとう！！</PageTitle>
    </>
  )
}
