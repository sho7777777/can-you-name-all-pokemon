// Components
import { MessageMolecule } from '../../molecules/GameCompModal/MessageMolecule';
import { OptionButtonMolecule } from '../../molecules/GameCompModal/OptionButtonMolecule';
import { RewardMolecule } from '../../molecules/GameCompModal/RewardMolecule';
import { TitleMolecule } from '../../molecules/GameCompModal/TitleMolecule';

// Types
import { FC } from 'react';
import { gameCompletedModalProps } from '../../../types/modal';

export const GameCompModalOrganism: FC<gameCompletedModalProps> = (props) => {

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      <div className="relative bg-gray-200 max-w-md w-96 rounded z-30">
        <TitleMolecule />
        <RewardMolecule />
        <MessageMolecule />
        <OptionButtonMolecule {...props} />
      </div>
    </div>
  )
}
