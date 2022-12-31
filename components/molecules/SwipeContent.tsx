import React from 'react'
import { useEffect, useState } from 'react';
import { totalPokeNum } from '../../const/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'
import { PokeImg } from '../atoms/PokeImg';

export const SwipeContent = () => {
  // List of pokemon which will be displayed on the swiper. Always starts with Pikachu(No.025).
  const [swipePokeList, setSwipePokeList] = useState<string[]>([]);
  const randomPokeList: string[] = ['025']

  // Maximum value of pokemon displayed.
  const displayPokeLimit = 50;
  for (var i = 1; i < displayPokeLimit; i++) {
    const pokeNo = ('00' + Math.ceil(Math.random() * totalPokeNum)).slice(-3)
    randomPokeList.push(pokeNo)
  }

  // Prevent Hydration.
  useEffect(() => {
    setSwipePokeList(randomPokeList);
  }, [])

  return (
    <div className='w-full'>
      <Swiper spaceBetween={0} centeredSlides={true} autoplay={{ delay: 4000 }} modules={[Autoplay]}>
        {swipePokeList.map((pokeNo: string) => (
          <SwiperSlide key={pokeNo}>
            <PokeImg alt='pokemon' pokeNo={pokeNo} m='mx-auto' h='h-24' w='w-24' hMd='md:h-28' wMd='md:w-28' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
