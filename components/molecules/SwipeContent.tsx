import React from 'react'
import { useEffect, useState } from 'react';
import { totalPokeNum } from '../../const/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'

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
        {swipePokeList.map((pokemon: string) => (
          <SwiperSlide key={pokemon}>
            <div>
              <div className="mx-auto mb-4 w-24 h-24 md:h-28 md:w-28">
                <img src={`/pokedex/${pokemon}.png`} alt="pokemon" className='w-24 h-24 md:w-28 md:h-28' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
