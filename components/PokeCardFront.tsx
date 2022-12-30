import { FC } from "react"


type Props = {
  pokeNo: string,
  pokeNameJa: string
}

export const PokeCardFront: FC<Props> = (props) => {
  const { pokeNo, pokeNameJa } = props;
  return (
    <div className="absolute w-full h-full rounded mb-2 backface-hidden">
      <div className="h-3/5 flex bg-gradient-to-r from-pink-50 to-pink-200 items-center justify-center">
        <img src={`/pokedex/${pokeNo}.png`} alt="" className="m-auto w-28 h-28" />
      </div>
      <div className="py-6 mb-2 h-2/5 bg-gradient-to-r from-green-50 to-green-200">
        <p className="text-center my-auto">No. {pokeNo}</p>
        <p className="text-center">{pokeNameJa}</p>
      </div>
    </div>
  )
}
