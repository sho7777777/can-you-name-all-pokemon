import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export const Top = () => {

  const [totalAccess, setTotalAccess] = useState(0)

  return (
    <div className="bg-white container mx-auto my-auto">
      <h1 className="text-2xl md:text-3xl m-4 text-center bg-green-300 ">
        ポケモン（英語で）いえるかな？
      </h1>

      {/* <div className="text-center mb-4 bg-cyan-200">
        <Image src={`/pokedex/025.png`} alt="pikachu" width={100} height={100} />
      </div> */}

      <div className="overflow-hidden">


        <div className="flex animate-slide">
          <div className="text-center mb-4 min-w-full">
            <Image src={`/pokedex/025.png`} alt="pikachu" width={100} height={100} />
          </div>
          <div className="text-center mb-4 min-w-full">
            <Image src={`/pokedex/001.png`} alt="pikachu" width={100} height={100} />
          </div>
          <div className="text-center mb-4 min-w-full">
            <Image src={`/pokedex/004.png`} alt="pikachu" width={100} height={100} />
          </div>
          <div className="text-center mb-4 min-w-full">
            <Image src={`/pokedex/007.png`} alt="pikachu" width={100} height={100} />
          </div>
          <div className="text-center mb-4 min-w-full">
            <Image src={`/pokedex/025.png`} alt="pikachu" width={100} height={100} />
          </div>
        </div>
      </div>


      <p className='text-lg md:text-xl text-center'>
        あなたは{totalAccess}人めのポケモントレーナーです
      </p>

      <div className="flex flex-col justify-center items-center h-32 gap-4 hover:cursor-pointer bg-cyan-200 opacity-50">
        <Link href="/pokedex"><p>ポケモンずかん</p></Link>
        <Link href="/pokemon-battle"><p>いえるかな？</p></Link>
        <Link href="/ranking"><p>ランキング</p></Link>
      </div>
    </div>
  )
}
