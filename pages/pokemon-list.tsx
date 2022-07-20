import Link from 'next/link';
import styles from '../styles/PokemonList.module.css'

//export default function PokemonList(pokemon: { pokemonListEn: string[]; pokemonListJa: string[]; }) {
export default function PokemonList(pokemon) {
  console.log(pokemon)
  return (
    <div>
      <Link href="/">
        <p>トップに戻る</p>
      </Link>
      <p>ポケモンリスト</p>
      <div className="grid grid-cols-4 gap4">
        {pokemon.pokemonList.map((pokemon: {}, index: number) => (
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
                    <p className="text-center my-auto">No. {pokemon.No}</p>
                    <p className="text-center">{pokemon.nameEn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // try catchの処理
  //try {
  const pokemonListJa: string[] = [];
  const pokemonListEn: string[] = [];
  const pokemonList: [{ No: string, nameJa: string, nameEn: string }] = [];
  for (var i = 1; i <= 151; i++) {
    const pokeman: { No: string, nameJa: string, nameEn: string } = {}
    const url = 'https://pokeapi.co/api/v2/pokemon-species/' + i;
    const res = await fetch(url);
    const data = await res.json();
    pokemonListJa.push(data.names[0].name);
    pokemonListEn.push(data.name)
    pokeman.No = ("00" + i).slice(-3);
    pokeman.nameJa = data.names[0].name;
    pokeman.nameEn = data.name;
    pokemonList.push(pokeman)
    // pokemonList[i].nameJa = data.names[0].name;
    // pokemonList[i].nameEn = data.name;
  }
  return {
    props: {
      pokemonList
    }
  }
}
//   } catch (err) {
//     console.error(err)
//   }
// }
