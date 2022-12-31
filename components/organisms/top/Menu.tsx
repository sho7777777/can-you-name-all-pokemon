// Component
import Link from "next/link"
import { MenuCursor } from "../../atoms/MenuCursor"
import { MenuCursorPing } from "../../atoms/MenuCursorPing"
import { MenuParts } from "../../molecules/Top/MenuParts"


export const Menu = () => {
  return (
    <div className="flex flex-col justify-center h-32 gap-4 hover:cursor-pointer w-40 mx-auto">
      <MenuParts link="/pokedex">ポケモンずかん</MenuParts>
      <MenuParts link="/pokemonBattle">言えるかな？</MenuParts>
      <MenuParts link="/ranking">ランキング</MenuParts>
    </div>
  )
}
