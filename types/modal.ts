export type GameOverModalProps = {
  correctAnswer: string,
  currentPokeNo: string,
  pokeOrigin: string,
  questionNo: number,
  shuffleFlg: boolean,
  setIsGameOver: boolean,
  setQuestionNo: () => void,
  setShowRankingModal: () => void,
  setShuffleFlg: () => void,
}

export type gameCompletedModalProps = {
  setIsGameCompleted: () => void,
  setShowRankingModal: () => void,
}

