import Link from 'next/link';

// Hook
import { useState } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'

export const Top = () => {

  const totalPokemon = 151;
  const pokemonImage: string[] = ['025'];
  const [totalAccess, setTotalAccess] = useState(0);

  for (var i = 1; i < 100; i++) {
    const pokeIndex = ('00' + Math.ceil(Math.random() * totalPokemon)).slice(-3)
    pokemonImage.push(pokeIndex)
  }

  return (
    <div className="">
      <div className="bg-white container mx-auto my-auto">
        <h1 className="text-2xl md:text-3xl m-4 text-center ">
          ポケモン（英語で）いえるかな？
        </h1>

        <div className='w-full'>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{ delay: 4000 }}
            modules={[Autoplay]}
          >
            {pokemonImage.map((pokemon, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={`/pokedex/${pokemon}.png`} alt="pokemon" className="mx-auto my-2 w-20 h-20 md:w-28 md:h-28" />
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>


        <p className='text-lg md:text-xl text-center'>
          あなたは{totalAccess}人めのポケモントレーナーです
        </p>

        <div className="flex flex-col justify-center items-center h-32 gap-4 hover:cursor-pointer ">
          <Link href="/pokedex"><p>ポケモンずかん</p></Link>
          <Link href="/pokemon-battle"><p>いえるかな？</p></Link>
          <Link href="/ranking"><p>ランキング</p></Link>
        </div>
      </div>
    </div >

  )
}
