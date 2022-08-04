
// Component
import { FC } from 'react';

type Props = {
  onClick?: () => void;
  isButtonDisabled?: boolean;
  buttonStyle: string;
}

export const Button: FC<Props> = (props) => {

  const { onClick, isButtonDisabled, buttonStyle } = props;

  return (
    <div>
      <button type="button" className={buttonStyle} onClick={onClick} disabled={isButtonDisabled}>とうろく</button>
    </div>
  )
}
