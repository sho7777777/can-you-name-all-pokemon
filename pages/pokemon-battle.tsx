// Component
import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import { GameCompletedModal } from '../components/GameCompletedModal';
import { GameOverModal } from '../components/GameOverModal';
import { RegisterRankingModal } from '../components/RegisterRankingModal';
import Layout from '../components/Layout';

// Hook
import { useShuffle } from '../hooks/useShuffle';

// lib
import { loadPokemon } from '../lib/load-pokemon';

// Type
import { Pokemon } from '../types/pokemon';


export default function PokemonBattle(pokemon: { pokemonList: Pokemon[]; }) {

  const [questionNo, setQuestionNo] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameCompleted, setIsGameCompleted] = useState<boolean>(false);
  const [showRankingModal, setShowRankingModal] = useState<boolean>(false);
  const [shuffleFlg, setShuffleFlag] = useState<boolean>(true);

  // const allPokemonList = pokemon.pokemonList.concat();

  const { doShuffle } = useShuffle();

  // 配列は参照渡しのためポケモン図鑑の並びも変わるので、concatで回避
  // 動作確認後はsliceメソッドは消す
  const pokemonList: Pokemon[] = pokemon.pokemonList.concat().slice(0, 5);
  // const pokemonList: Pokemon[] = pokemon.pokemonList.concat();

  // １問毎にポケモンがシャッフルされるのを防ぐため、メモ化
  const shuffledPokemon: Pokemon[] = useMemo(() => doShuffle(pokemonList), [shuffleFlg]);

  // 選択肢の作成
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
        {/* ---modal--- */}
        {isGameOver && <GameOverModal questionNo={questionNo} setQuestionNo={setQuestionNo} setIsGameOver={setIsGameOver}
          shuffleFlg={shuffleFlg} setShuffleFlg={setShuffleFlag} setShowRankingModal={setShowRankingModal} />}
        {isGameCompleted && <GameCompletedModal setIsGameCompleted={setIsGameCompleted} setShowRankingModal={setShowRankingModal} />}
        {showRankingModal && <RegisterRankingModal setShowRankingModal={setShowRankingModal} questionNo={questionNo} setQuestionNo={setQuestionNo} setIsGameOver={setIsGameOver}
          shuffleFlg={shuffleFlg} setShuffleFlg={setShuffleFlag} />}

        <div className="h-screen pt-20 md:pt-32">
          <p className="text-3xl text-center my-4 text-gray-600">言えるかな？</p>
          <p className="text-2xl text-center mb-2 text-gray-600">現在 {questionNo + 1} 匹め</p>

          <div className="mx-auto w-24 h-24 md:h-28 md:w-28">
            <Image src={`/pokedex/${currentPokemonNo}.png`} width={100} height={100} alt="pokemon image" layout='responsive' />
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

export async function getStaticProps() {
  const pokemonList: Pokemon[] = [];
  try {
    const pokemonList = await loadPokemon();
    return {
      props: {
        pokemonList
      }
    }
  } catch (err) {
    console.error(err)
  }
}
