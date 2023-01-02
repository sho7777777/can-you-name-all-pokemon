import { FC } from 'react'
import { ButtonAtom } from '../../../atoms/ButtonAtom';

type Props = {
  setShowWarningPopUp: (showWarningPopUp: boolean) => void;
}

export const ButtonMolecule: FC<Props> = (props) => {
  const { setShowWarningPopUp } = props;

  const closeWarningPopUp = () => {
    sessionStorage.setItem('showPopUp', 'false');
    setShowWarningPopUp(false);
  }

  return (
    <div className="text-center mt-1">
      <ButtonAtom style="btn-basic" onClick={closeWarningPopUp}>わかりました</ButtonAtom>
    </div>
  )
}
