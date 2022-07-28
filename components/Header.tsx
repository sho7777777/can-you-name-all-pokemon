import Link from 'next/link';

export const Header = () => {

  return (
    <div className="bg-indigo-300 ">
      <div className="flex justify-center gap-3 hover:cursor-pointer">
        <Link href="/"><button>Top</button></Link>
        <Link href="/pokedex"><button>ポケモンずかん</button></Link>
        <Link href="/pokemon-battle"><button>言えるかな？</button></Link>
        <Link href="/ranking"><button>ランキング</button></Link>
      </div>
    </div>
  )
}
