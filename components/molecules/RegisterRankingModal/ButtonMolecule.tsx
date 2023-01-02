import { FC } from "react";
import { ButtonAtom } from "../../atoms/ButtonAtom";

type Props = {
  registerRanking: () => void;
  isButtonDisabled: boolean;
  style: string;
};

export const ButtonMolecule: FC<Props> = (props) => {
  const { registerRanking, isButtonDisabled, style } = props;
  return (
    <>
      <ButtonAtom
        style={style}
        isButtonDisabled={isButtonDisabled}
        onClick={registerRanking}
      >
        とうろく
      </ButtonAtom>
    </>
  );
};
