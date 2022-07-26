import Link from 'next/link';
import { useState } from 'react';

//export default function PokemonList(pokemon: { pokemonListEn: string[]; pokemonListJa: string[]; }) {
// export default function Pokedex(pokemon: { pokemonList: { No: string, nameJa: string, nameEn: string, Origin: string }[]; }) {

export default function Pokedex(pokemon) {

  // console.log("pokemon", pokemon.pokemonList[0])
  // 初回アクセス時
  // const pokemonList: { No: string, nameJa: string, nameEn: string, Origin: string }[] = pokemon.pokemonList;

  const [pokemonList, setPokemonList] = useState(pokemon.pokemonList)
  const allPokemon = pokemon.pokemonList;

  const filterPokemon = (e) => {
    const sortValue = parseInt(e.target.value);
    console.log(sortValue)
    if (sortValue == 151) {
      setPokemonList(allPokemon)
    } else {
      const slicePokemonList = pokemon.pokemonList;
      console.log("sortValue", sortValue, "sortValue + 10", sortValue + 10)
      setPokemonList(slicePokemonList.slice(sortValue, sortValue + 10))
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-green-300 text-center  my-3">ポケモンずかん</h1>
      <div className="flex grid grid-cols-4 md:grid-cols-8 container bg-emerald-200 mx-auto justify-between">
        <button type="button" value="151" onClick={filterPokemon}>すべて</button>
        <button type="button" value="0" onClick={filterPokemon}>1~10</button>
        <button type="button" value="10" onClick={filterPokemon}>11~20</button>
        <button type="button" value="20" onClick={filterPokemon}>21~30</button>
        <button type="button" value="31" onClick={filterPokemon}>31~40</button>
        <button type="button" value="41" onClick={filterPokemon}>41~50</button>
        <button type="button" value="51" onClick={filterPokemon}>51~60</button>
        <button type="button" value="61" onClick={filterPokemon}>61~70</button>
        <button type="button" value="71" onClick={filterPokemon}>71~80</button>
        <button type="button" value="81" onClick={filterPokemon}>81~90</button>
        <button type="button" value="91" onClick={filterPokemon}>91~100</button>
        <button type="button" value="101" onClick={filterPokemon}>101~110</button>
        <button type="button" value="111" onClick={filterPokemon}>111~120</button>
        <button type="button" value="121" onClick={filterPokemon}>121~130</button>
        <button type="button" value="131" onClick={filterPokemon}>131~140</button>
        <button type="button" value="141" onClick={filterPokemon}>141~151</button>
      </div>


      <div className="container mx-auto">
        <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-violet-300 place-items-center">
          {pokemonList.map((pokemon: { No: string, nameJa: string, nameEn: string, Origin: string }, index: number) => (
            <div key={index}>
              <div className="relative h-60 w-60 m-2 rounded-md overflow-hidden shadow-lg border group perspective">
                <div className="absolute w-full h-full preserve-3d group-hover:my-rotate-y-180 duration-700">
                  <div className="absolute w-60 h-full rounded mb-2 backface-hidden">
                    <div className=" h-3/5 flex bg-pink-50">
                      <img src={`/pokedex/${pokemon.No}.png`} alt="pokemon" className="m-auto items-center " />
                    </div>
                    <div className="py-6 mb-2 h-2/5 bg-green-50 ">
                      <p className="text-center my-auto ">No. {pokemon.No}</p>
                      <p className="text-center">{pokemon.nameJa}</p>
                    </div>
                  </div>
                  <div className="absolute w-60 h-full rounded mb-2 my-rotate-y-180 backface-hidden">
                    <div className=" h-3/5 flex bg-pink-50">
                      <img src={`/pokedex/${pokemon.No}.png`} alt="pokemon" className="m-auto items-center" />
                    </div>
                    <div className="py-6 mb-2 h-2/5 bg-green-50">
                      <p className="text-center">{pokemon.nameEn}</p>
                      <p className="text-center">{pokemon.Origin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   // try catchの処理
//   //try {
//   const pokemonListJa: string[] = [];
//   const pokemonListEn: string[] = [];
//   const pokemonList: { No: string, nameJa: string, nameEn: string, Origin: string }[] = [];
//   const url = "http://localhost:3000/api/pokemon";
//   const origin = await fetch(url).then(res => res.json())
//   for (var i = 1; i <= 151; i++) {
//     const pokeman: { No: string, nameJa: string, nameEn: string, Origin: string } = {}
//     const url = 'https://pokeapi.co/api/v2/pokemon-species/' + i;
//     const res = await fetch(url);
//     const data = await res.json();
//     pokemonListJa.push(data.names[0].name);
//     pokemonListEn.push(data.name)
//     pokeman.No = ("00" + i).slice(-3);
//     pokeman.nameJa = data.names[0].name;
//     pokeman.nameEn = data.name;
//     pokeman.Origin = origin[i - 1].Origin;
//     pokemonList.push(pokeman)
//     // pokemonList[i].nameJa = data.names[0].name;
//     // pokemonList[i].nameEn = data.name;
//   }
//   return {
//     props: {
//       pokemonList
//     }
//   }
// }
// //   } catch (err) {
// //     console.error(err)
// //   }
// // }
