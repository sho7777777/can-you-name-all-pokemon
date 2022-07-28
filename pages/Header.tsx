import Link from 'next/link';


export function Header(pageFlg: any) {

  const {
    isPokedexPage, setIsPokedexPage,
    isPokemonBattlePage, setIsPokemonBattlePage,
    isRankingPage, setIsRankingPage
  } = pageFlg;

  const showPokedexPage = () => {
    setIsPokedexPage(true);
    setIsPokemonBattlePage(false);
    setIsRankingPage(false);
  }

  const showPokemonBattlePage = () => {
    setIsPokedexPage(false);
    setIsPokemonBattlePage(true);
    setIsRankingPage(false);
  }

  const showRankingPage = () => {
    setIsPokedexPage(false);
    setIsPokemonBattlePage(false);
    setIsRankingPage(true);
  }

  return (
    <div className="bg-cyan-100">
      <h2 className="w-full h-6  text-center ">ポケモン（英語で）いえるかな？</h2>
      <div className="flex justify-center gap-3 mt-3 hover:cursor-pointer">

        <Link href="/"><button>Top</button></Link>
        <Link href="/pokemon"><button onClick={showPokedexPage}>ポケモンずかん</button></Link>
        <Link href="/pokemon"><button onClick={showPokemonBattlePage}>言えるかな？</button></Link>
        <Link href="/pokemon"><button onClick={showRankingPage}>ランキング</button></Link>
      </div>
    </div>
  )
}
