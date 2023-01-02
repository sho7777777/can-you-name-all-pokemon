import { FC } from "react";
import { ButtonMolecule } from "../../molecules/Pokedex/WarningPopUp/ButtonMolecule";
import { ImgMolecule } from "../../molecules/Pokedex/WarningPopUp/ImgMolecule";
import { TextMolecule } from "../../molecules/Pokedex/WarningPopUp/TextMolecule";
import { TitleMolecule } from "../../molecules/Pokedex/WarningPopUp/TitleMolecule";

type Props = {
  setShowWarningPopUp: (showWarningPopUp: boolean) => void;
};

export const WarningPopUpOrganism: FC<Props> = (props) => {
  return (
    <div className="absolute bg-black inset-0 h-full bg-opacity-60 flex justify-center z-10">
      <div className="relative bg-white rounded pt-2 max-w-md h-[430px] mt-40">
        <TitleMolecule />
        <TextMolecule />
        <ImgMolecule />
        <ButtonMolecule {...props} />
      </div>
    </div>
  );
};
