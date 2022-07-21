import Link from 'next/link';
import { useState } from 'react';


export function Top(props) {

  const [totalAccess, setTotalAccess] = useState(0)

  return (
    <div className="bg-pink-100">
      <h1 className="text-3xl m-4 bg-cyan-100">
        ポケモン（英語で）言えるかな？
      </h1>

      <img src={`/pokedex/025.png`} alt="pikachu" />

      <p>
        あなたは{totalAccess}人めのポケモントレーナーです。
      </p>

      <div className="flex flex-col h-32 gap-4 hover:cursor-pointer">
        <Link href="/pokemon-list"><p>ポケモン図鑑</p></Link>
        <Link href="pokemon-battle"><p onClick={() => alert("clicked")}>言えるかな？</p></Link>
        <Link href="ranking"><p>ランキング</p></Link>
      </div>
    </div>
  )
}
