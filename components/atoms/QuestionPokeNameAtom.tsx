import { FC } from "react";

type Props = {
  pokeNameJa: string;
};

export const QuestionPokeNameAtom: FC<Props> = (props) => {
  const { pokeNameJa } = props;
  return <h2 className="my-2 text-center">{pokeNameJa}</h2>;
};
