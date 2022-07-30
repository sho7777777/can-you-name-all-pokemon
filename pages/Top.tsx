import Link from 'next/link';
import { useState } from 'react';


export function Top(props) {

  const [totalAccess, setTotalAccess] = useState(0)

  return (
    <div className="">
      <div className="bg-white container mx-auto my-auto">
        <h1 className="text-2xl md:text-3xl m-4 text-center bg-green-300 ">
          ポケモン（英語で）いえるかな？
        </h1>

        <img src={`/pokedex/025.png`} alt="pikachu" className='mx-auto mb-4' />

        <p className='text-lg md:text-xl text-center'>
          あなたは{totalAccess}人めのポケモントレーナーです
        </p>

        <div className="flex flex-col justify-center items-center h-32 gap-4 hover:cursor-pointer bg-cyan-200 opacity-50">
          <Link href="/pokedex"><p>ポケモンずかん</p></Link>
          <Link href="/pokemon-battle"><p>いえるかな？</p></Link>
          <Link href="/ranking"><p>ランキング</p></Link>
        </div>
      </div>
    </div>

  )
}
