// Components
import React, { useState, useEffect } from "react";
import { LayoutTemplate } from "../components/templates/LayoutTemplate";
import { PokemonBattleTemplate } from "../components/templates/PokemonBattleTemplate";

// Hook,lib
import { useShuffle } from "../hooks/useShuffle";
import { loadPokemon } from "../lib/load-pokemon";
import {
  gameCompModalProps,
  gameOverModalProps,
  registerRankingModalProps,
} from "../types/modal";

// Type
import { Pokemon } from "../types/pokemon";

export default function PokemonBattle(props: { pokeList: Pokemon[] }) {
  const [questionNo, setQuestionNo] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameCompleted, setIsGameCompleted] = useState<boolean>(false);
  const [showRankingModal, setShowRankingModal] = useState<boolean>(false);
  const [shuffleFlg, setShuffleFlag] = useState<boolean>(true);

  const { doShuffle } = useShuffle();

  const pokemonList: Pokemon[] = props.pokeList;
  const [shuffledPokemon, setShuffledPokemon] =
    useState<Pokemon[]>(pokemonList);

  // Creating options.
  const correctAnswer = shuffledPokemon[questionNo].nameEn;
  const pokeOrigin = shuffledPokemon[questionNo].origin;
  const wrongAnswerList = shuffledPokemon.filter(
    (n) => n.nameEn != correctAnswer
  );
  type wrongOption = {
    wrongOptionA: string;
    wrongOptionB: string;
    wrongOptionC: string;
  };
  const [wrongOption, setWrongOption] = useState<wrongOption>({
    wrongOptionA: "",
    wrongOptionB: "",
    wrongOptionC: "",
  });
  const optionSet: string[] = [
    correctAnswer,
    wrongOption.wrongOptionA,
    wrongOption.wrongOptionB,
    wrongOption.wrongOptionC,
  ];

  const [option, setOption] = useState<string[]>([]);
  doShuffle(option);

  // For pokemon image.
  const currentPokeNo: string = shuffledPokemon[questionNo].No;

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (e.target as HTMLButtonElement).value === correctAnswer
      ? correctAnswerSelected()
      : setIsGameOver(true);
  };

  const correctAnswerSelected = () => {
    questionNo + 1 === shuffledPokemon.length
      ? (setIsGameCompleted(true), setQuestionNo(questionNo))
      : setQuestionNo(questionNo + 1);
  };

  // Update array only when retried.
  useEffect(() => {
    doShuffle(pokemonList);
    setShuffledPokemon([...pokemonList]);
  }, [shuffleFlg]);

  useEffect(() => {
    doShuffle(wrongAnswerList);
    setWrongOption((prevState) => ({
      ...prevState,
      wrongOptionA: wrongAnswerList[0].nameEn,
      wrongOptionB: wrongAnswerList[1].nameEn,
      wrongOptionC: wrongAnswerList[2].nameEn,
    }));
    setOption([...optionSet]);
  }, [correctAnswer]);

  // Props
  const questionProps = {
    currentPokeNo: currentPokeNo,
    option: option,
    pokeNameJa: shuffledPokemon[questionNo].nameJa,
    questionNo: questionNo + 1,
    checkAnswer: checkAnswer,
  };

  const gameOverModalProps: gameOverModalProps = {
    correctAnswer: correctAnswer,
    currentPokeNo: currentPokeNo,
    isGameOver: isGameOver,
    pokeOrigin: pokeOrigin,
    questionNo: questionNo,
    shuffleFlg: shuffleFlg,
    setIsGameOver: setIsGameOver,
    setQuestionNo: setQuestionNo,
    setShowRankingModal: setShowRankingModal,
    setShuffleFlg: setShuffleFlag,
  };

  const gameCompletedModalProps: gameCompModalProps = {
    isGameCompleted: isGameCompleted,
    setIsGameCompleted: setIsGameCompleted,
    setShowRankingModal: setShowRankingModal,
  };

  const registerRankingModalProps: registerRankingModalProps = {
    questionNo: questionNo,
    showRankingModal: showRankingModal,
    shuffleFlg: shuffleFlg,
    setIsGameOver: setIsGameOver,
    setQuestionNo: setQuestionNo,
    setShowRankingModal: setShowRankingModal,
    setShuffleFlg: setShuffleFlag,
  };

  const propsList = {
    questionProps,
    gameOverModalProps,
    gameCompletedModalProps,
    registerRankingModalProps,
  };

  return (
    <LayoutTemplate>
      <div className="container mx-auto">
        <PokemonBattleTemplate {...propsList} />
      </div>
    </LayoutTemplate>
  );
}

export async function getStaticProps() {
  const pokeList: Pokemon[] = await loadPokemon();
  return {
    props: {
      pokeList,
    },
  };
}
