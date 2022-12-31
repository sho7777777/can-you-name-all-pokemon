// Components
import { MessageParts } from '../../molecules/GameCompletedModal/MessageParts';
import { OptionButtons } from '../../molecules/GameCompletedModal/OptionButtons';
import { RewardParts } from '../../molecules/GameCompletedModal/RewardParts';
import { TitleParts } from '../../molecules/GameCompletedModal/TitleParts';

// Types
import { FC } from 'react';
import { gameCompletedModalProps } from '../../../types/modal';

export const GameCompletedModal: FC<gameCompletedModalProps> = (props) => {

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      <div className="relative bg-gray-200 max-w-md w-96 rounded z-30">
        <TitleParts />
        <RewardParts />
        <MessageParts />
        <OptionButtons {...props} />
      </div>
    </div>
  )
}
