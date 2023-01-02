// Components
import { OptionButtonMolecule } from "../../molecules/GameOverModal/OptionButtonMolecule";
import { ImgMolecule } from "../../molecules/GameOverModal/ImgMolecule";
import { YourScoreMolecule } from "../../molecules/GameOverModal/YourScoreMolecule";
import { TitleMolecule } from "../../molecules/GameOverModal/TitleMolecule";

// Types
import { FC } from "react";
import { gameOverModalProps } from "../../../types/modal";

export const GameOverModalOrganism: FC<gameOverModalProps> = (props) => {
  const {
    correctAnswer,
    currentPokeNo,
    pokeOrigin,
    questionNo,
    shuffleFlg,
    setIsGameOver,
    setQuestionNo,
    setShowRankingModal,
    setShuffleFlg,
  } = props;

  const restart = () => {
    setQuestionNo(0);
    setIsGameOver(false);
    setShuffleFlg(!shuffleFlg);
  };

  const registerRanking = () => {
    setShowRankingModal(true);
    setIsGameOver(false);
  };

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center z-10">
      <div className="relative bg-gray-200 rounded pt-2 w-96 h-1/2 mt-40">
        <TitleMolecule />
        <ImgMolecule
          correctAnswer={correctAnswer}
          currentPokeNo={currentPokeNo}
          pokeOrigin={pokeOrigin}
        />
        <YourScoreMolecule questionNo={questionNo} />
        <OptionButtonMolecule
          restart={restart}
          registerRanking={registerRanking}
        />
      </div>
    </div>
  );
};
