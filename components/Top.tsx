// Component
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Constant
import { totalPokemon } from '../const/constants';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'
import { Credit } from './Credit';
import { Menu } from './Menu';


export const Top = () => {

  const [pokemonImage, setPokemonImage] = useState<string[]>([]);
  // Always Starts with Pikachu
  const imageIndex: string[] = ['025']
  const indexForSwiper = 50;
  for (var i = 1; i < indexForSwiper; i++) {
    const pokeIndex = ('00' + Math.ceil(Math.random() * totalPokemon)).slice(-3)
    imageIndex.push(pokeIndex)
  }

  // Prevent Hydrate Warning
  useEffect(() => {
    setPokemonImage(imageIndex);
  }, [])

  return (
    <div className="bg-white container mx-auto h-screen pt-20 bg-transparent">

      {/* ---Title--- */}
      <h1 className="text-2xl md:text-3xl m-4 text-center ">
        ポケモン（英語で）言えるかな？
      </h1>

      {/* ---Swiper--- */}
      <div className='w-full'>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
        >
          {pokemonImage.map((pokemon: string, index: number) => (
            <SwiperSlide key={index}>
              <div>
                <div className="mx-auto mb-4 w-24 h-24 md:h-28 md:w-28">
                  <Image src={`/pokedex/${pokemon}.png`} alt="pokemon" width="100" height="100" loading="eager" layout="responsive" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---Menu Select--- */}
      <Menu />
      <Credit />

    </div>
  )
}
