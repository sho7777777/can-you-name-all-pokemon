import { FC } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  margin: string;
  textColor?: string;
  textPosition?: string;
  textSize: string;
  textSizeMd: string;
  options?: string;
};

export const PageTitleAtom: FC<Props> = (props) => {
  const {
    children,
    margin,
    textColor,
    textPosition,
    textSize,
    textSizeMd,
    options,
  } = props;
  return (
    <h1
      className={`${margin} ${textColor} ${textPosition} ${textSize} ${textSizeMd} ${options}`}
    >
      {children}
    </h1>
  );
};
