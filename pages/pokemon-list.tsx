import Link from 'next/link';

//export default function PokemonList(pokemon: { pokemonListEn: string[]; pokemonListJa: string[]; }) {
export default function PokemonList(pokemon) {
  console.log(pokemon)
  return (
    <div>
      <Link href="/">
        <p>トップに戻る</p>
      </Link>
      <p>ポケモンリスト</p>
      {pokemon.pokemonList.map((pokemon: {}, index: number) => (
        <div key={index}>
          <div >
            <img src={`/pokedex/${pokemon.No}.png`} alt="pokemon" />
            <span>{pokemon.No}</span>
            <span>{pokemon.nameJa} : </span>
          </div>
          <div >
            <img src={`/pokedex/${pokemon.No}.png`} alt="pokemon" />
            <span>{pokemon.No}</span>
            <span>{pokemon.nameEn}</span>
          </div>
        </div>
      ))}
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
