import React, { useState, FC, useMemo } from 'react';
import { GameCompletedModal } from './gameCompletedModal';
import { GameOverModal } from './gameOverModal';
import { RegisterRankingModal } from './registerRankingModal';
import Layout from '../components/Layout';
import { useShuffle } from '../hooks/useShuffle';

// Type
import { Pokemon } from '../types/pokemon';
import Image from 'next/image';

export const PokemonBattle = (pokemon: { pokemonList: Pokemon[]; }) => {

  const [questionNo, setQuestionNo] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameCompleted, setIsGameCompleted] = useState<boolean>(false);
  const [showRankingModal, setShowRankingModal] = useState<boolean>(false);
  const [shuffleFlg, setShuffleFlag] = useState(true);

  const allPokemonList = pokemon.pokemonList.concat();

  const { doShuffle } = useShuffle();

  // 配列は参照渡しのためポケモン図鑑の並びも変わるので、concatで回避
  // 動作確認後はsliceメソッドは消す
  const pokemonList: Pokemon[] = pokemon.pokemonList.concat().slice(0, 5);
  // const pokemonList: Pokemon[] = pokemon.pokemonList.concat();

  const shuffledPokemon: Pokemon[] = useMemo(() => doShuffle(pokemonList), [shuffleFlg]);

  console.log("shuffledPokemon", shuffledPokemon)

  const correctAnswer = shuffledPokemon[questionNo].nameEn;
  const wrongAnswers = shuffledPokemon.filter(n => n.nameEn != correctAnswer);

  const wrongAnswerA = wrongAnswers[0].nameEn;
  const wrongAnswerB = wrongAnswers[1].nameEn;
  const wrongAnswerC = wrongAnswers[2].nameEn;

  const option: string[] = [correctAnswer, wrongAnswerA, wrongAnswerB, wrongAnswerC];


  // 選択肢を混ぜる
  const shuffledOption = doShuffle(option)
  const [optionA, optionB, optionC, optionD] = [...shuffledOption];

  // 画像取得に使用
  const currentPokemonNo = shuffledPokemon[questionNo].No;

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (e.target as HTMLButtonElement).value === correctAnswer ? correctAnswerSelected() : setIsGameOver(true);
  }

  const correctAnswerSelected = () => {

    questionNo + 1 === shuffledPokemon.length ? (
      setIsGameCompleted(true),
      setQuestionNo(questionNo)
    ) : setQuestionNo(questionNo + 1)
  }

  return (
    <Layout>
      <div className="container mx-auto bg-green-100">
        {/* モーダルメッセージ */}
        {isGameOver && <GameOverModal questionNo={questionNo} setQuestionNo={setQuestionNo} setIsGameOver={setIsGameOver}
          shuffleFlg={shuffleFlg}
          setShuffleFlg={setShuffleFlag} />}
        {isGameCompleted && <GameCompletedModal setIsGameCompleted={setIsGameCompleted} setShowRankingModal={setShowRankingModal} />}
        {showRankingModal && <RegisterRankingModal setShowRankingModal={setShowRankingModal} questionNo={questionNo} setQuestionNo={setQuestionNo} />}

        <div className="h-screen pt-32">
          <p className="text-3xl text-center my-4">いえるかな？</p>
          <p className="text-2xl text-center mb-2">現在 {questionNo + 1} 匹め</p>

          <div className="text-center">
            <Image src={`/pokedex/${currentPokemonNo}.png`} width={100} height={100} alt="pokemon image" />
          </div>

          <h2 className="text-center my-2">{shuffledPokemon[questionNo].nameJa}</h2>

          <div className="flex flex-col justify-between items-center w-3/4 max-w-lg mx-auto gap-y-2 md:flex-row">
            <button type="button" value={optionA} onClick={checkAnswer} className="option-btn">{optionA}</button>
            <button type="button" value={optionB} onClick={checkAnswer} className="option-btn">{optionB}</button>
            <button type="button" value={optionC} onClick={checkAnswer} className="option-btn">{optionC}</button>
            <button type="button" value={optionD} onClick={checkAnswer} className="option-btn">{optionD}</button>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default PokemonBattle;

export async function getStaticProps() {

  const pokemonList: { No: string, nameJa: string, nameEn: string, origin: string }[] = [];
  // origin取得用API
  const url = "http://localhost:3000/api/pokemon";

  try {

    const origin = await fetch(url).then(res => res.json());

    for (var i = 1; i <= 151; i++) {
      const pokeman: Pokemon = { No: '', nameJa: '', nameEn: '', origin: '' };

      // nameJa, nameEn取得用API
      const url = 'https://pokeapi.co/api/v2/pokemon-species/' + i;
      const res = await fetch(url);
      const data = await res.json();

      pokeman.No = ("00" + i).slice(-3);
      pokeman.nameJa = data.names[0].name;
      pokeman.nameEn = data.name;
      pokeman.origin = origin[i - 1].Origin;
      pokemonList.push(pokeman)
    }
    return {
      props: {
        pokemonList
      }
    }
  } catch (err) {
    console.error(err)
  }
}
