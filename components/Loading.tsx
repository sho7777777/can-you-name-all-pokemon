// Component
import Image from "next/image"

export const Loading = () => {
  return (
    <div className="absolute bg-black inset-0 h-full bg-opacity-60 flex justify-center items-center z-10">
      <div className="relativce mx-auto z-50 ">
        <div className="animate-bounce">
          <Image src="/pokedex/025.png" alt="loading" width={100} height={100} />
        </div>
        <p className="text-white">Now Loading...</p>
      </div>
    </div>
  )
}
