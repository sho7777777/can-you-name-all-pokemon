import { PokeImg } from "../../atoms/PokeImg"
import { ImgParts } from "../../molecules/Loading/ImgParts"


export const Loading = () => {
  return (
    <div className="absolute bg-black inset-0 h-full bg-opacity-60 flex justify-center items-center z-10">
      <ImgParts />
    </div>
  )
}
