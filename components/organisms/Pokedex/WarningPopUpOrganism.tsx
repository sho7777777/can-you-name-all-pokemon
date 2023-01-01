import { FC } from "react";
import { ButtonParts } from "../../molecules/Pokedex/WarningPopUp/ButtonParts";
import { ImgParts } from "../../molecules/Pokedex/WarningPopUp/ImgParts";
import { TextParts } from "../../molecules/Pokedex/WarningPopUp/TextParts";
import { TitleParts } from "../../molecules/Pokedex/WarningPopUp/TitleParts";

type Props = {
  setShowWarningPopUp: (showWarningPopUp: boolean) => void;
}

export const WarningPopUpOrganism: FC<Props> = (props) => {

  return (
    <div className="absolute bg-black inset-0 h-full bg-opacity-60 flex justify-center z-10">
      <div className="relative bg-white rounded pt-2 max-w-md h-[430px] mt-40">
        <TitleParts />
        <TextParts />
        <ImgParts />
        <ButtonParts {...props} />
      </div>
    </div>
  )
}
