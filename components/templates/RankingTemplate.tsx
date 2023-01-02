import { BodyOrganism } from "../organisms/Ranking/BodyOrganism";
import { TitleOrganism } from "../organisms/Ranking/TitleOrganism";

export const RankingTemplate = () => {
  return (
    <div className="container mx-auto pt-3 flex flex-col h-screen">
      <TitleOrganism />
      <BodyOrganism />
    </div>
  );
};
