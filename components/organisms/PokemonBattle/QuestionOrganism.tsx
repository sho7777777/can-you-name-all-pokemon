import { FC } from "react";
import { OptionButtonMolecule } from "../../molecules/PokemonBattle/OptionButtonMolecule";
import { TitleMolecule } from "../../molecules/PokemonBattle/TitleMolecule";
import { ImgMolecule } from "../../molecules/PokemonBattle/ImgMolecule";

type Props = {
  questionNo: number;
  currentPokeNo: string;
  pokeNameJa: string;
  option: string[];
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const QuestionOrganism: FC<Props> = (props) => {
  const { questionNo, currentPokeNo, pokeNameJa, option, checkAnswer } = props;
  return (
    <div className="h-screen pt-20 md:pt-32">
      <TitleMolecule questionNo={questionNo} />
      <ImgMolecule currentPokeNo={currentPokeNo} pokeNameJa={pokeNameJa} />
      <OptionButtonMolecule option={option} checkAnswer={checkAnswer} />
    </div>
  );
};
