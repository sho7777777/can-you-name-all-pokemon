// Component
import React, { useState, useEffect } from 'react';
import { GameCompletedModal } from '../components/GameCompletedModal';
import { GameOverModal } from '../components/organisms/pokemonBattle/GameOverModal';
import { Layout } from '../components/Layout';
import { Question } from '../components/organisms/pokemonBattle/Question';
import { RegisterRankingModal } from '../components/RegisterRankingModal';
import { PokemonBattleTemplate } from '../components/templates/PokemonBattleTemplate';

// Hook
import { useShuffle } from '../hooks/useShuffle';

// lib
import { loadPokemon } from '../lib/load-pokemon';

// Type
import { Pokemon } from '../types/pokemon';


export default function PokemonBattle(props: { pokeList: Pokemon[]; }) {

  const [questionNo, setQuestionNo] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameCompleted, setIsGameCompleted] = useState<boolean>(false);
  const [showRankingModal, setShowRankingModal] = useState<boolean>(false);
  const [shuffleFlg, setShuffleFlag] = useState<boolean>(true);

  const { doShuffle } = useShuffle();

  // 配列は参照渡しのためポケモン図鑑の並びも変わるので、concatで回避
  // 動作確認後はsliceメソッドは消す
  // const pokemonList: Pokemon[] = pokemon.pokemonList.concat().slice(0, 6);
  const pokemonList: Pokemon[] = props.pokeList.concat();


  const [shuffledPokemon, setShuffledPokemon] = useState<Pokemon[]>(pokemonList)

  // 選択肢の作成
  const correctAnswer = shuffledPokemon[questionNo].nameEn;
  const pokeOrigin = shuffledPokemon[questionNo].origin;
  const wrongAnswerList = shuffledPokemon.filter(n => n.nameEn != correctAnswer);
  type wrongOption = { wrongOptionA: string, wrongOptionB: string, wrongOptionC: string }
  const [wrongOption, setWrongOption] = useState<wrongOption>({ wrongOptionA: "", wrongOptionB: "", wrongOptionC: "" })
  const optionSet: string[] = [correctAnswer, wrongOption.wrongOptionA, wrongOption.wrongOptionB, wrongOption.wrongOptionC];

  const [option, setOption] = useState<string[]>([])
  doShuffle(option)

  // For pokemon image.
  const currentPokeNo: string = shuffledPokemon[questionNo].No;

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
    doShuffle(wrongAnswerList);
    setWrongOption(prevState => ({
      ...prevState,
      wrongOptionA: wrongAnswerList[0].nameEn,
      wrongOptionB: wrongAnswerList[1].nameEn,
      wrongOptionC: wrongAnswerList[2].nameEn
    }))
    setOption([...optionSet])
  }, [correctAnswer])

  // Props
  const questionProps = {
    currentPokeNo: currentPokeNo,
    option: option,
    pokeNameJa: shuffledPokemon[questionNo].nameJa,
    questionNo: questionNo + 1,
    checkAnswer: checkAnswer
  }
  const GameOverModalProps = {
    correctAnswer: correctAnswer,
    currentPokeNo: currentPokeNo,
    pokeOrigin: pokeOrigin,
    questionNo: questionNo,
    shuffleFlg: shuffleFlg,
    setIsGameOver: setIsGameOver,
    setQuestionNo: setQuestionNo,
    setShowRankingModal: setShowRankingModal,
    setShuffleFlg: setShuffleFlag,
  }

  const gameCompletedModalProps = {
    setIsGameCompleted: setIsGameCompleted,
    setShowRankingModal: setShowRankingModal
  }

  const registerRankingModalProps = {
    setShowRankingModal: setShowRankingModal,
    questionNo: questionNo,
    setQuestionNo: setQuestionNo,
    setIsGameOver: setIsGameOver,
    shuffleFlg: shuffleFlg,
    setShuffleFlg: setShuffleFlag
  }

  return (
    <Layout>
      <div className="container mx-auto">
        {isGameOver && <GameOverModal  {...GameOverModalProps} />}
        {isGameCompleted && <GameCompletedModal {...gameCompletedModalProps} />}
        {showRankingModal && <RegisterRankingModal {...registerRankingModalProps} />}

        <PokemonBattleTemplate {...questionProps} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const pokeList: Pokemon[] = await loadPokemon();
    return {
      props: {
        pokeList
      }
    }
  } catch (err) {
    console.error(err)
  }
}
