

export const Loading = () => {
  return (
    <div className="absolute bg-black inset-0 h-full bg-opacity-60 flex justify-center items-center z-10">
      <div className="relativce mx-auto z-50 ">
        <div className="animate-bounce">
          <img src="/pokedex/025.png" alt="loading" className="w-24 h-24 md:w-28 md:h-28" />
        </div>
        <p className="text-white">Now Loading...</p>
      </div>
    </div>
  )
}
