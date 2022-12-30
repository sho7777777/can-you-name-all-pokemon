// Component
import { useEffect, useState } from 'react';

// Constant
import { totalPokeNum } from '../const/constants';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'
import { Credit } from './Credit';
import { Menu } from './Menu';


export const Top = () => {

  // Swiperに表示するポケモンのリスト。常にピカチュウ(No.025)から始める。
  const [swipePokeList, setSwipePokeList] = useState<string[]>([]);
  const randomPokeList: string[] = ['025']
  // 表示するポケモンの最大数
  const displayPokeLimit = 50;
  for (var i = 1; i < displayPokeLimit; i++) {
    const pokeNo = ('00' + Math.ceil(Math.random() * totalPokeNum)).slice(-3)
    randomPokeList.push(pokeNo)
  }

  // Prevent Hydration
  useEffect(() => {
    setSwipePokeList(randomPokeList);
  }, [])

  return (
    <div className="bg-white container mx-auto h-screen pt-20 bg-transparent">

      <h1 className="text-2xl md:text-3xl m-4 text-center">
        ポケモン（英語で）言えるかな？
      </h1>

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

      <Menu />
      <Credit />

    </div>
  )
}
