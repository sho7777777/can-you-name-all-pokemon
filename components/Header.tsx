// Component
import Link from 'next/link';

export const Header = () => {

  return (
    <div className="container py-2 mx-auto">
      <div className="flex justify-between w-4/5 md:w-1/2 mx-auto text-sm md:text-base">
        <Link href="/"><button className='hover:text-gray-400 hover:cursor-pointer'>Top</button></Link>
        <Link href="/pokedex"><button className='hover:text-gray-400 hover:cursor-pointer'>ポケモンずかん</button></Link>
        <Link href="/pokemon-battle"><button className='hover:text-gray-400 hover:cursor-pointer'>言えるかな？</button></Link>
        <Link href="/ranking"><button className='hover:text-gray-400 hover:cursor-pointer'>ランキング</button></Link>
      </div>
    </div>
  )
}
