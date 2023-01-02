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

export type gameCompModalProps = {
  isGameCompleted: boolean,
  setIsGameCompleted: (isGameCompleted: boolean) => void,
  setShowRankingModal: (showRankingModal: boolean) => void,
}

export type registerRankingModalProps = {
  questionNo: number,
  showRankingModal: boolean,
  shuffleFlg: boolean,
  setIsGameOver: (isGameOver: boolean) => void,
  setQuestionNo: (questionNo: number) => void,
  setShowRankingModal: (showRankingModal: boolean) => void,
  setShuffleFlg: (shuffleflg: boolean) => void,
}
