
// Component
import { FC } from 'react';

type Props = {
  onClick?: any;
  isButtonDisabled?: boolean;
  buttonStyle: string;
  value?: string;
  text: string;
}

export const Button: FC<Props> = (props) => {

  const { onClick, isButtonDisabled, buttonStyle, value, text } = props;

  return (
    <div>
      <button type="button" className={buttonStyle} onClick={onClick} disabled={isButtonDisabled} value={value}>{text}</button>
    </div>
  )
}
