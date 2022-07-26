import Link from 'next/link';
import { useState, useRef } from 'react';
import { GameCompletedModal } from './gameCompletedModal';
import { GameOverModal } from './gameOverModal';
import { RegisterRankingModal } from './registerRankingModal';
export default function PokemonBattle(pokemon) {

  const [questionNo, setQuestionNo] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showRankingModal, setShowRankingModal] = useState(false);


  // console.log("pokemon", pokemon.pokemonList)
  // 参照渡しのためポケモン図鑑の並びも変わるので、concatで回避
  // const pokemonList: { No: string, nameJa: string, nameEn: string, Origin: string }[] = pokemon.pokemonList.concat();
  const pokemonList: { No: string, nameJa: string, nameEn: string, Origin: string }[] = pokemon.pokemonList.concat().slice(0, 5);

  // 配列の中身をシャッフルする
  const doShuffle = (pokemon: {}[]) => {
    for (var i = (pokemon.length - 1); 0 < i; i--) {
      var r = Math.floor(Math.random() * ((i + 1)));
      var tmp = pokemon[i];
      pokemon[i] = pokemon[r];
      pokemon[r] = tmp;
    }
    return pokemon;
  }

  const shuffledPokemon: { No: string, nameJa: string, nameEn: string, Origin: string }[] = doShuffle(pokemonList);
  const correctAnswer = shuffledPokemon[questionNo].nameEn;
  const wrongAnswers = shuffledPokemon.filter(n => n.nameEn != correctAnswer);
  const indexForWrongAnswerA = Math.floor(Math.random() * wrongAnswers.length);
  const indexForWrongAnswerB = Math.floor(Math.random() * wrongAnswers.length);
  const indexForWrongAnswerC = Math.floor(Math.random() * wrongAnswers.length);

  const wrongAnswerA = wrongAnswers[indexForWrongAnswerA].nameEn;
  const wrongAnswerB = wrongAnswers[indexForWrongAnswerB].nameEn;
  const wrongAnswerC = wrongAnswers[indexForWrongAnswerC].nameEn;

  const option = [correctAnswer, wrongAnswerA, wrongAnswerB, wrongAnswerC];

  const shuffledOption = doShuffle(option)
  const pokemonNo = shuffledPokemon[questionNo].No;

  const checkAnswer = (e) => {
    e.target.value === correctAnswer ? correctAnswerSelected() : setGameOver(true);
  }

  const correctAnswerSelected = () => {
    // alert("good job!!");
    setQuestionNo(questionNo + 1)
    if (questionNo + 1 === shuffledPokemon.length) {
      setGameCompleted(true);
      setQuestionNo(0);
    }
  }

  return (
    <div className="container mx-auto mt-2">

      {/* Modal Message */}
      {gameOver && <GameOverModal questionNo={questionNo} setGameOver={setGameOver} setQuestionNo={setQuestionNo} />}
      {gameCompleted && <GameCompletedModal setGameCompleted={setGameCompleted} setShowRankingModal={setShowRankingModal} />}
      {showRankingModal && <RegisterRankingModal setShowRankingModal={setShowRankingModal} />}

      <p className="text-3xl text-center bg-blue-100 my-2">言えるかな？</p>
      <p className="text-2xl text-center mb-2">現在 {questionNo + 1} 匹め</p>
      <img src={`/pokedex/${pokemonNo}.png`} alt="pokemon image" className="m-auto" />
      <h2 className="text-center">{shuffledPokemon[questionNo].nameJa}</h2>
      {/* <div className="grid grid-cols-2 bg-green-200 w-96 m-auto"> */}
      <div className="flex flex-col justify-between items-center w-3/4 max-w-lg mx-auto gap-y-2 md:flex-row">
        <button type="button" value={shuffledOption[0]} onClick={checkAnswer} className="rounded  bg-green-300 p-1 drop-shadow-md hover:bg-green-200 hover:text-rose-400 w-28">{shuffledOption[0]}</button>
        <button type="button" value={shuffledOption[1]} onClick={checkAnswer} className="rounded  bg-green-300 p-1 drop-shadow-md hover:bg-green-200 hover:text-rose-400 w-28">{shuffledOption[1]}</button>
        <button type="button" value={shuffledOption[2]} onClick={checkAnswer} className="rounded  bg-green-300 p-1 drop-shadow-md hover:bg-green-200 hover:text-rose-400 w-28">{shuffledOption[2]}</button>
        <button type="button" value={shuffledOption[3]} onClick={checkAnswer} className="rounded  bg-green-300 p-1 drop-shadow-md hover:bg-green-200 hover:text-rose-400 w-28">{shuffledOption[3]}</button>
      </div>
    </div>

  )
}
