import { FC } from "react";
import { usrNameMaxLength } from "../../../const/constants";
import { useValidation } from "../../../hooks/useValidation";
import { InputPartsProps, inputValidationProps } from "../../../types/input";

export const InputMolecule: FC<InputPartsProps> = (props) => {
  const {
    registerRanking,
    userName,
    setUserName,
    userNameValidation,
    setUserNameValidation,
  } = props;
  const { inputValidation } = useValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValidationValue: inputValidationProps = {
      userName: e.target.value,
      setUserName: setUserName,
      setUserNameValidation: setUserNameValidation,
    };
    inputValidation(inputValidationValue);
  };

  const onEnter = (e: any) => {
    const userName = e.target.value;
    if (
      e.key === "Enter" &&
      userName.length > 0 &&
      userName.length < usrNameMaxLength
    ) {
      registerRanking();
    }
  };

  return (
    <div>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        なまえ
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="なまえを入力してね"
        required
        value={userName}
        onChange={handleChange}
        onKeyPress={onEnter}
      />
      {userNameValidation.isUserNameUndefined && (
        <p className="text-red-600">なまえを入力してね</p>
      )}
      {userNameValidation.isUserNameExceedsMaxLength && (
        <p className="text-red-600">
          なまえは{usrNameMaxLength}文字以内にしてね
        </p>
      )}
      {userNameValidation.isCharacterInvalid && (
        <p className="text-red-600">その文字は使わないでね</p>
      )}
    </div>
  );
};
