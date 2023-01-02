import { FC } from "react";
import { sortButtonProperties } from "../../../const/constants";
import { SortButtonMolecule } from "../../molecules/Pokedex/SortButtonMolecule";

type Props = {
  filterPokeFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const SortAreaOrganism: FC<Props> = (props) => {
  const { filterPokeFunc } = props;

  return (
    <div className="container grid grid-cols-4 mx-auto text-center md:grid-cols-8">
      {sortButtonProperties.map((buttonProperty, index) => (
        <SortButtonMolecule
          key={index}
          onClick={filterPokeFunc}
          style="btn-sort"
          value={buttonProperty.value}
        >
          {buttonProperty.text}
        </SortButtonMolecule>
      ))}
    </div>
  );
};
