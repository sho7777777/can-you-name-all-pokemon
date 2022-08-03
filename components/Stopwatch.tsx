import { FC, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { Digit } from './Digit';

type Props = {
  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;
  completedTime: string;
  setCompletedTime: (completedTime: string) => void;
}

export const Stopwatch: FC<Props> = (props) => {

  const { isGameOver, setIsGameOver, completedTime, setCompletedTime } = props

  const { seconds, minutes, pause } = useStopwatch({ autoStart: true });

  if (isGameOver == true) {
    // console.log("aaa")

    pause();


  }



  return (
    <div className="container">
      <div className="flex w-52 mx-auto justify-center">
        <Digit value={minutes} />
        <span>:</span>
        <Digit value={seconds} />
      </div>
    </div>
  )

}
