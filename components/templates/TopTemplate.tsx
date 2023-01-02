import { CreditOrganism } from "../organisms/Top/CreditOrganism";
import { MenuOrganism } from "../organisms/Top/MenuOrganism";
import { BodyOrganism } from "../organisms/Top/BodyOrganism";

export const TopTemplate = () => {
  return (
    <div className="bg-white container mx-auto h-screen pt-20 bg-transparent">
      <BodyOrganism />
      <MenuOrganism />
      <CreditOrganism />
    </div>
  );
};
