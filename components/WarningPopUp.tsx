import { FC } from "react";

type Props = {
  setShowWarningPopUp: (showWarningPopUp: boolean) => void;
}

export const WarningPopUp: FC<Props> = (props) => {
  const { setShowWarningPopUp } = props;

  const closeWarningPopUp = () => {
    sessionStorage.setItem('showPopUp', 'false');
    setShowWarningPopUp(false);
  }

  return (
    <div className="absolute bg-black inset-0 h-full bg-opacity-60 flex justify-center z-10">
      <div className="relative bg-white rounded pt-2 max-w-md h-[430px] mt-40">
        <div className="flex justify-between items-center pb-2 border-b-2">
          <h4 className="text-gray-600 text-2xl font-bold ml-3">ちゅうい</h4>
        </div>
        <div className="mt-3 mb-3">
          <p className="text-gray-600 text-base ml-3">このページでは画像をクリックすると音声が出るよ。</p>
          <p className="text-gray-600 text-base ml-3">音量に注意してね。</p>
        </div>
        <div className="text-center">
          <img src="/warning/warning.png" alt="warning" className="w-60 h-60 mx-auto" />
        </div>
        <div className="text-center mt-1">
          <button className="btn-basic" onClick={closeWarningPopUp}>わかりました</button>
        </div>
      </div>
    </div>
  )
}
