import { SetStateAction } from "react";
import { userNameValidationProps } from "./validation";

export type InputPartsProps = {
  registerRanking: () => void,
  userName: string,
  setUserName: (userName: string) => void,
  userNameValidation: userNameValidationProps,
  setUserNameValidation: React.Dispatch<SetStateAction<userNameValidationProps>>,
}

export type inputValidationProps = {
  userName: string,
  setUserName: (userName: string) => void,
  setUserNameValidation: React.Dispatch<SetStateAction<userNameValidationProps>>,
}
