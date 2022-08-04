// Component
import Link from 'next/link';

export const Header = () => {

  return (
    <div className="container py-2 mx-auto">
      <div className="flex justify-between w-1/2 mx-auto">
        <Link href="/"><button className='hover:text-emerald-200 hover:cursor-pointer'>Top</button></Link>
        <Link href="/pokedex"><button className='hover:text-emerald-200 hover:cursor-pointer'>ポケモンずかん</button></Link>
        <Link href="/pokemon-battle"><button className='hover:text-emerald-200 hover:cursor-pointer'>言えるかな？</button></Link>
        <Link href="/ranking"><button className='hover:text-emerald-200 hover:cursor-pointer'>ランキング</button></Link>
      </div>
    </div>
  )
}
