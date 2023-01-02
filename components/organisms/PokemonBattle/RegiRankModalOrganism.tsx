import { FC, SetStateAction, useState } from 'react';
import { useFirebase } from '../../../hooks/useFirebase';
import { OptionButtonForRegiRankModalProps } from '../../../types/button';
import { OptionButtonMolecule } from '../../molecules/RegisterCompletedModal/OptionButtonMolecule';
import { TitleMolecule as RegiCompTitleMolecule } from '../../molecules/RegisterCompletedModal/TitleMolecule';
import { TitleMolecule as RegiRankTitleMolecule } from '../../molecules/RegisterRankingModal/TitleMolecule';
import { ButtonMolecule } from '../../molecules/RegisterRankingModal/ButtonMolecule';
import { InputMolecule } from '../../molecules/RegisterRankingModal/InputMolecule';
import { userNameValidationProps } from '../../../types/validation';
import { useValidation } from '../../../hooks/useValidation';
import { InputPartsProps } from '../../../types/input';

type Props = {
  questionNo: number;
  setQuestionNo: (questionNo: number) => void;
  setShowRankingModal: (showRankingModal: boolean) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  shuffleFlg: boolean;
  setShuffleFlg: (shuffleflg: boolean) => void;
}

export const RegiRankModalOrganism: FC<Props> = (props) => {

  const { questionNo, setQuestionNo, setShowRankingModal, setIsGameOver, shuffleFlg, setShuffleFlg } = props
  const [isRegisterRankingCompleted, setIsRegisterRankingCompleted] = useState<boolean>(false)

  // ユーザー名バリデーション
  const [userNameValidation, setUserNameValidation] = useState<userNameValidationProps>({
    buttonStyle: "mt-2 btn-disabled",
    isButtonDisabled: true,
    isCharacterInvalid: false,
    isUserNameExceedsMaxLength: false,
    isUserNameUndefined: true,
  })

  const { registerValidation } = useValidation()
  const { addRanking } = useFirebase();

  const [userName, setUserName] = useState<string>('');

  const registerRanking = () => {
    const isValidName = registerValidation(userName)
    if (isValidName) {
      addRanking(userName, questionNo + 1);
      setIsRegisterRankingCompleted(true);
    }
  }

  const OptionButtonForRegiRankModalProps: OptionButtonForRegiRankModalProps = {
    shuffleFlg: shuffleFlg,
    setIsGameOver: setIsGameOver,
    setQuestionNo: setQuestionNo,
    setShuffleFlg: setShuffleFlg,
    setShowRankingModal: setShowRankingModal
  }

  const InputPartsProps: InputPartsProps = {
    registerRanking: registerRanking,
    userName: userName,
    setUserName: setUserName,
    userNameValidation: userNameValidation,
    setUserNameValidation: setUserNameValidation
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      {!isRegisterRankingCompleted ? (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
          <div className="relative w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg">
              <div className="py-6 px-6 lg:px-8 rounded">
                <RegiRankTitleMolecule />
                <InputMolecule {...InputPartsProps} />
                <ButtonMolecule registerRanking={registerRanking} isButtonDisabled={userNameValidation.isButtonDisabled}
                  style={userNameValidation.buttonStyle} />
              </div>
            </div>
          </div>
        </div>) : (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
          <div className="relative p-1 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="py-6 px-6 lg:px-8 rounded">
                <RegiCompTitleMolecule />
                <OptionButtonMolecule {...OptionButtonForRegiRankModalProps} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
