import { useEffect } from "react";
import { useReward } from "react-rewards";

export const RewardMolecule = () => {
  const { reward } = useReward("rewardId", "confetti");

  useEffect(() => {
    // Trigger first reward separately because setInterval makes first trigger 5 seconds after on rendering.
    reward();
    let i = 1;
    const timerId = setInterval(() => {
      reward();
      i++;
      if (i == 3) clearInterval(timerId);
    }, 5000);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <span id="rewardId" />
    </div>
  );
};
