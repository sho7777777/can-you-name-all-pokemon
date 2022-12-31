export type gameOverModalProps = {
  correctAnswer: string,
  currentPokeNo: string,
  isGameOver: boolean,
  pokeOrigin: string,
  questionNo: number,
  shuffleFlg: boolean,
  setIsGameOver: (isGameOver: boolean) => void,
  setQuestionNo: (questionNo: number) => void,
  setShowRankingModal: (showRankingModal: boolean) => void,
  setShuffleFlg: (shuffleflg: boolean) => void,
}

export type gameCompletedModalProps = {
  setIsGameCompleted: (isGameCompleted: boolean) => void,
  setShowRankingModal: (showRankingModal: boolean) => void,
}

export type registerRankingModalProps = {
  questionNo: number,
  shuffleFlg: boolean,
  setIsGameOver: (isGameOver: boolean) => void,
  setQuestionNo: (questionNo: number) => void,
  setShowRankingModal: (showRankingModal: boolean) => void,
  setShuffleFlg: (shuffleflg: boolean) => void,
}
