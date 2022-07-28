import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import PokemonList from './pokedex';
import { PokemonProvider } from '../components/PokemonProvider'
import { Header } from './Header'
import { Top } from './Top';
import Ranking from './ranking';
import PokemonBattle from './pokemon-battle'
import Pokedex from './pokedex';
import Layout from '../components/Layout';

const Home: NextPage = (pokedata) => {

  const [isTopPage, setIsTopPage] = useState(false);
  // const [isPokedexPage, setIsPokedexPage] = useState(true);
  const [isPokemonBattlePage, setIsPokemonBattlePage] = useState(false);
  // const [isRankingPage, setIsRankingPage] = useState(false);
  const [pokemon, setPokemon] = useState(pokedata.pokemonList)
  // console.log(pokemon)
  const pageFlg = {
    // isPokedexPage, setIsPokedexPage,
    isPokemonBattlePage, setIsPokemonBattlePage,
    // isRankingPage, setIsRankingPage
  }

  return (
    <div >
      <Layout>

        <Header {...pageFlg} />

        <main className={styles.main}>
          {isTopPage && <Top isTopPage={isTopPage} setIsTopPage={setIsTopPage} />}
        </main>

        {/* {isPokedexPage && <Pokedex pokemonList={pokemon} />} */}
        {isPokemonBattlePage && <PokemonBattle pokemonList={pokemon} />}
        {/* {isRankingPage && <Ranking />} */}
      </Layout>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  // try catchの処理
  //try {
  const pokemonListJa: string[] = [];
  const pokemonListEn: string[] = [];
  const pokemonList: { No: string, nameJa: string, nameEn: string, Origin: string }[] = [];
  const url = "http://localhost:3000/api/pokemon";
  const origin = await fetch(url).then(res => res.json())
  for (var i = 1; i <= 151; i++) {
    const pokeman: { No: string, nameJa: string, nameEn: string, Origin: string } = {}
    const url = 'https://pokeapi.co/api/v2/pokemon-species/' + i;
    const res = await fetch(url);
    const data = await res.json();
    pokemonListJa.push(data.names[0].name);
    pokemonListEn.push(data.name)
    pokeman.No = ("00" + i).slice(-3);
    pokeman.nameJa = data.names[0].name;
    pokeman.nameEn = data.name;
    pokeman.Origin = origin[i - 1].Origin;
    pokemonList.push(pokeman)
    // pokemonList[i].nameJa = data.names[0].name;
    // pokemonList[i].nameEn = data.name;
  }
  // console.log(pokemonList)
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
