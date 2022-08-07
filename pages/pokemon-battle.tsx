// Component
import React, { useState, useEffect } from 'react';
import { GameCompletedModal } from '../components/GameCompletedModal';
import { GameOverModal } from '../components/GameOverModal';
import { RegisterRankingModal } from '../components/RegisterRankingModal';
import { Layout } from '../components/Layout';

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

  const { doShuffle } = useShuffle();

  // 配列は参照渡しのためポケモン図鑑の並びも変わるので、concatで回避
  // 動作確認後はsliceメソッドは消す
  // const pokemonList: Pokemon[] = pokemon.pokemonList.concat().slice(0, 6);
  const pokemonList: Pokemon[] = pokemon.pokemonList.concat();

  const [shuffledPokemon, setShuffledPokemon] = useState<Pokemon[]>(pokemonList)

  // 選択肢の作成
  const correctAnswer = shuffledPokemon[questionNo].nameEn;
  const wrongAnswers = shuffledPokemon.filter(n => n.nameEn != correctAnswer);
  // console.log("wrongAnswers", wrongAnswers)

  // const wrongAnswerA = wrongAnswers[0].nameEn;
  // const wrongAnswerB = wrongAnswers[1].nameEn;
  // const wrongAnswerC = wrongAnswers[2].nameEn;

  const [wrongAnswerA, setWrongAnswerA] = useState<string>('');
  const [wrongAnswerB, setWrongAnswerB] = useState<string>('');
  const [wrongAnswerC, setWrongAnswerC] = useState<string>('');

  const optionSet: string[] = [correctAnswer, wrongAnswerA, wrongAnswerB, wrongAnswerC];

  const [option, setOption] = useState<string[]>([])
  doShuffle(option)

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

  // 再チャレンジ（フラグが更新される）時だけ配列を更新）
  useEffect(() => {
    doShuffle(pokemonList)
    setShuffledPokemon([...pokemonList])
  }, [shuffleFlg])

  useEffect(() => {
    doShuffle(wrongAnswers);
    setWrongAnswerA(wrongAnswers[0].nameEn);
    setWrongAnswerB(wrongAnswers[1].nameEn);
    setWrongAnswerC(wrongAnswers[2].nameEn);
    setOption([...optionSet])
  }, [correctAnswer])

  return (
    <Layout>
      <div className="container mx-auto">
        {/* ---modal--- */}
        {isGameOver && <GameOverModal questionNo={questionNo} setQuestionNo={setQuestionNo} setIsGameOver={setIsGameOver}
          shuffleFlg={shuffleFlg} setShuffleFlg={setShuffleFlag} setShowRankingModal={setShowRankingModal} />}
        {isGameCompleted && <GameCompletedModal setIsGameCompleted={setIsGameCompleted} setShowRankingModal={setShowRankingModal} />}
        {showRankingModal && <RegisterRankingModal setShowRankingModal={setShowRankingModal} questionNo={questionNo} setQuestionNo={setQuestionNo} setIsGameOver={setIsGameOver}
          shuffleFlg={shuffleFlg} setShuffleFlg={setShuffleFlag} />}

        <div className="h-screen pt-20 md:pt-32">
          <p className="text-3xl text-center my-4 text-gray-600">言えるかな？</p>
          <p className="text-2xl text-center mb-2 text-gray-600">現在 {questionNo + 1} / 151 ひき</p>

          <div className="mx-auto w-24 h-24 md:h-28 md:w-28">
            <img src={`/pokedex/${currentPokemonNo}.png`} alt="" className='w-24 h-24 md:w-28 md:h-28' />
          </div>

          <h2 className="text-center my-2">{shuffledPokemon[questionNo].nameJa}</h2>

          <div className="flex flex-col justify-between items-center w-3/4 max-w-lg mx-auto gap-y-2 md:flex-row">
            <button type="button" value={option[0]} onClick={checkAnswer} className="option-btn">{option[0]}</button>
            <button type="button" value={option[1]} onClick={checkAnswer} className="option-btn">{option[1]}</button>
            <button type="button" value={option[2]} onClick={checkAnswer} className="option-btn">{option[2]}</button>
            <button type="button" value={option[3]} onClick={checkAnswer} className="option-btn">{option[3]}</button>
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
