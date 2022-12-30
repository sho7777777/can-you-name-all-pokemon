// Component
import Link from 'next/link';

export const Header = () => {

  return (
    <div className="container py-2 mx-auto">
      <div className="flex justify-between w-4/5 md:w-1/2 mx-auto text-sm md:text-base">
        <Link href="/"><button className='btn-header'>Top</button></Link>
        <Link href="/pokedex"><button className='btn-header'>ポケモンずかん</button></Link>
        <Link href="/pokemonBattle"><button className='btn-header'>言えるかな？</button></Link>
        <Link href="/ranking"><button className='btn-header'>ランキング</button></Link>
      </div>
    </div>
  )
}
