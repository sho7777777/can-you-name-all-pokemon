// Hook
import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useFirebase } from '../../../hooks/useFirebase';
import { Button } from '../../Button';

type Props = {
  questionNo: number;
  setQuestionNo: (questionNo: number) => void;
  setShowRankingModal: (showRankingModal: boolean) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  shuffleFlg: boolean;
  setShuffleFlg: (shuffleflg: boolean) => void;
}

export const RegisterRankingModal: FC<Props> = (props) => {

  const { questionNo, setQuestionNo, setShowRankingModal, setIsGameOver, shuffleFlg, setShuffleFlg } = props
  const [isRegisterRankingCompleted, setIsRegisterRankingCompleted] = useState<boolean>(false)
  const maxLength = 20

  // ユーザー名バリデーション
  const [userName, setUserName] = useState<string>('');
  const [isUserNameUndefined, setIsUserNameUndefined] = useState<boolean>(true);
  const [isUserNameLengthValid, setIsUserNameLengthValid] = useState<boolean>(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isInvalidCharacter, setIsInvalidCharacter] = useState(false);
  // ボタン
  const buttonStyleActive = "mt-2 ml-auto btn-register";
  const buttonStyleDisabled = "mt-2 ml-auto btn-disabled";
  const [buttonStyle, setButtonStyle] = useState(buttonStyleDisabled);


  const { addRanking } = useFirebase();
  const router = useRouter();

  const registerRanking = () => {
    if (userName === undefined) {
      return
    } else if (userName.length > maxLength) {
      return
    } else if (userName.includes("<") || userName.includes(">")) {
      return
    } else {
      addRanking(userName, questionNo + 1);
      setIsRegisterRankingCompleted(true);
    }
  }

  const restart = () => {
    setQuestionNo(0);
    setIsGameOver(false);
    setShuffleFlg(!shuffleFlg)
    setShowRankingModal(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userName = e.target.value;

    if (userName === undefined || userName.length === 0) {
      setIsUserNameUndefined(true)
      setIsUserNameLengthValid(true);
      setIsButtonDisabled(true);
      setButtonStyle(buttonStyleDisabled);
      setIsInvalidCharacter(false)
      setUserName(userName)
    } else if (userName.length > maxLength) {
      setIsUserNameUndefined(false);
      setIsUserNameLengthValid(false);
      setIsButtonDisabled(true);
      setButtonStyle(buttonStyleDisabled);
      setIsInvalidCharacter(false)
    } else {
      if (userName.includes("<") || userName.includes(">")) {
        setIsInvalidCharacter(true)
        setIsButtonDisabled(true);
        setButtonStyle(buttonStyleDisabled);
      } else {
        setIsUserNameUndefined(false);
        setIsUserNameLengthValid(true);
        setIsButtonDisabled(false);
        setButtonStyle(buttonStyleActive);
        setIsInvalidCharacter(false)
        setUserName(userName)
      }
    }

  }

  const onEnter = (e: any) => {
    const userName = e.target.value;
    if (e.key === "Enter" && userName.length > 0 && userName.length < 11) {
      registerRanking()
    }
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      {!isRegisterRankingCompleted ? (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="py-6 px-6 lg:px-8 rounded">
                <h3 className="mb-4 text-xl font-medium text-gray-600">ランキングとうろく</h3>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">なまえ</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="なまえを入力してね" required value={userName} onChange={handleChange} onKeyPress={onEnter} />
                  {isUserNameUndefined && <p className="text-red-600">なまえを入力してね</p>}
                  {!isUserNameLengthValid && <p className="text-red-600">なまえは{maxLength}文字以内にしてね</p>}
                  {isInvalidCharacter && <p className="text-red-600">その文字は使わないでね</p>}
                </div>
                <Button onClick={registerRanking} isButtonDisabled={isButtonDisabled} buttonStyle={buttonStyle} text="とうろく" />
              </div>
            </div>
          </div>
        </div>) : (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="py-6 px-6 lg:px-8 rounded">
                <h3 className="mb-4 text-xl font-medium text-gray-600">とうろくが完了しました。</h3>
                <div className="flex flex-row justify-between w-full mx-auto ">
                  <button type="button" className="btn-sort bg-indigo-400 hover:text-black hover:bg-indigo-300 text-sm" onClick={() => router.push('/ranking')}>ランキングをみる</button>
                  <button type="button" className="btn-basic" onClick={restart}>再チャレンジ！</button>
                  <button type="button" className="btn-back-to-top" onClick={() => router.push('/')}>Topに戻る</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
