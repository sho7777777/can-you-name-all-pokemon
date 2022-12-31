import React, { FC } from 'react'

type Props = {
  setShowWarningPopUp: (showWarningPopUp: boolean) => void;
}

export const ButtonParts: FC<Props> = (props) => {
  const { setShowWarningPopUp } = props;

  const closeWarningPopUp = () => {
    sessionStorage.setItem('showPopUp', 'false');
    setShowWarningPopUp(false);
  }

  return (
    <div className="text-center mt-1">
      <button className="btn-basic" onClick={closeWarningPopUp}>わかりました</button>
    </div>
  )
}
