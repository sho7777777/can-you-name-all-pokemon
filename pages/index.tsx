import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Header } from './Header'
import { Top } from './Top';
import Layout from '../components/Layout'

// const Home: NextPage = (pokedata) => {
const Home: NextPage = () => {

  const [isTopPage, setIsTopPage] = useState(true);
  const [isPokedexPage, setIsPokedexPage] = useState(false);
  const [isPokemonBattlePage, setIsPokemonBattlePage] = useState(false);
  const [isRankingPage, setIsRankingPage] = useState(false);
  // const [pokemon, setPokemon] = useState(pokedata.pokemonList)
  // console.log(pokemon)
  const pageFlg = {
    isPokedexPage, setIsPokedexPage,
    isPokemonBattlePage, setIsPokemonBattlePage,
    isRankingPage, setIsRankingPage
  }
  // console.log(pokemon)

  return (
    <div >
      <Layout>
        {/* <Header {...pageFlg} /> */}

        <main>
          <Top />
        </main>

      </Layout>
    </div>
  )
}

export default Home

// export async function getStaticProps() {

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
