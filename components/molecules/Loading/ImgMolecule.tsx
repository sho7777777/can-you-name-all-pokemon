import { PokeImgAtom } from '../../atoms/PokeImgAtom'

export const ImgMolecule = () => {
  return (
    <div>
      <div className="animate-bounce">
        <PokeImgAtom alt="loading" pokeNo="025" m="" h="h-24" w="w-24" hMd="md:h-28" wMd="md:w-28" />
      </div>
      <p className="text-white">Now Loading...</p>
    </div>
  )
}
