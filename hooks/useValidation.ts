import { usrNameMaxLength } from "../const/constants";
import { inputValidationProps } from "../types/input";
import { userNameValidationProps } from "../types/validation";

export const useValidation = () => {
  const registerValidation = (userName: string) => {
    if (userName === undefined) {
      window.alert("ユーザー名を入力してね。");
      return false;
    } else if (userName.length > usrNameMaxLength) {
      window.alert("名前は20文字以内にしてね。");
      return false;
    } else if (userName.includes("<") || userName.includes(">")) {
      window.alert("その記号は使わないでね。");
      return false;
    } else {
      return true;
    }
  };

  const inputValidation = (props: inputValidationProps) => {
    const { userName, setUserName, setUserNameValidation } = props;

    if (userName === undefined || userName.length === 0) {
      setUserNameValidation((prevState: userNameValidationProps) => ({
        ...prevState,
        buttonStyle: "mt-2 btn-disabled",
        isButtonDisabled: true,
        isCharacterInvalid: false,
        isUserNameExceedsMaxLength: false,
        isUserNameUndefined: true,
      }));
      setUserName(userName);
    } else if (userName.length > usrNameMaxLength) {
      setUserNameValidation((prevState: userNameValidationProps) => ({
        ...prevState,
        buttonStyle: "mt-2 btn-disabled",
        isButtonDisabled: true,
        isCharacterInvalid: false,
        isUserNameExceedsMaxLength: true,
        isUserNameUndefined: false,
      }));
    } else if (userName.includes("<") || userName.includes(">")) {
      setUserNameValidation((prevState: userNameValidationProps) => ({
        ...prevState,
        buttonStyle: "mt-2 btn-disabled",
        isButtonDisabled: true,
        isCharacterInvalid: true,
      }));
    } else {
      setUserNameValidation((prevState: userNameValidationProps) => ({
        ...prevState,
        buttonStyle: "mt-2 btn-register",
        isButtonDisabled: false,
        isCharacterInvalid: false,
        isUserNameExceedsMaxLength: false,
        isUserNameUndefined: false,
      }));
      setUserName(userName);
    }
  };

  return { inputValidation, registerValidation };
};
