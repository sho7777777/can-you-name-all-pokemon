import { FC } from "react";
import { useRouter } from "next/router";
import { gameCompModalProps } from "../../../types/modal";
import { ButtonAtom } from "../../atoms/ButtonAtom";

export const OptionButtonMolecule: FC<gameCompModalProps> = (props) => {
  const { setIsGameCompleted, setShowRankingModal } = props;
  const router = useRouter();

  const registerRanking = () => {
    setShowRankingModal(true);
    setIsGameCompleted(false);
  };

  const goToTopPage = () => router.push("/");

  return (
    <div className="flex justify-between my-2 mx-auto w-64 space-x-2">
      <ButtonAtom style="btn-basic" onClick={registerRanking}>
        ランキング登録
      </ButtonAtom>
      <ButtonAtom style="btn-back-to-top" onClick={goToTopPage}>
        Topに戻る
      </ButtonAtom>
    </div>
  );
};
