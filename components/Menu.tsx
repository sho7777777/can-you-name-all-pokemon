// Component
import Link from "next/link"


export const Menu = () => {
  return (
    <div className="flex flex-col justify-center h-32 gap-4 hover:cursor-pointer w-40 mx-auto">
      <div className='flex group'>
        <span className='absolute mr-2 text-transparent group-hover:text-black animate-ping opacity-75'>▶︎</span>
        <span className='relative mr-2 text-transparent group-hover:text-black'>▶︎</span>
        <Link href="/pokedex"><p className=''>ポケモンずかん</p></Link>
      </div>
      <div className="flex group">
        <span className='absolute mr-2 text-transparent group-hover:text-black animate-ping opacity-75'>▶︎</span>
        <span className='mr-2 text-transparent group-hover:text-black'>▶︎</span>
        <Link href="/pokemon-battle"><p className=''>言えるかな？</p></Link>
      </div>
      <div className="flex group">
        <span className='absolute mr-2 text-transparent group-hover:text-black animate-ping opacity-75'>▶︎</span>
        <span className='mr-2 text-transparent group-hover:text-black'>▶︎</span>
        <Link href="/ranking"><p>ランキング</p></Link>
      </div>
    </div>
  )
}
