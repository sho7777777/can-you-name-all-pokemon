import React from 'react'
import { PageTitleAtom } from '../../atoms/PageTitleAtom'

export const TitleMolecule = () => {
  return (
    <>
      <div>
        <PageTitleAtom margin='mt-4' textColor='from-red-300 via-green-300 to-pink-300' textPosition='text-center' textSize='text-2xl font-bold' textSizeMd='text-2xl' options='text-transparent bg-clip-text bg-gradient-to-r'>
          Congratulations!!
        </PageTitleAtom>
      </div>
      <PageTitleAtom margin='mt-2' textColor='text-gray-600' textPosition='text-center' textSize='text-xl' textSizeMd='text-xl' >おめでとう！！</PageTitleAtom>
    </>
  )
}
