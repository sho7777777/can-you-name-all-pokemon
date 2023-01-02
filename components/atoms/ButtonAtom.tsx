import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isButtonDisabled?: boolean;
  style: string;
  value?: string;
  onClick: any;
}

export const ButtonAtom: FC<Props> = (props) => {

  const { children, isButtonDisabled, style, value, onClick } = props;

  return (
    <div>
      <button type="button" className={style} disabled={isButtonDisabled} value={value} onClick={onClick}>{children}</button>
    </div>
  )
}
