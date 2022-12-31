import React from 'react'
import { Menu } from '../../Menu'
import { PageTitle } from '../../atoms/PageTitle'
import { SwipeContent } from '../../molecules/SwipeContent'

export const TopPageBody = () => {
  return (
    <>
      <PageTitle margin='m-4' textColor='text-gray-600' textSize='text-2xl' textSizeMd='md:text-3xl'>ポケモン（英語で）言えるかな？</PageTitle>
      <SwipeContent />
      <Menu />
    </>
  )
}
