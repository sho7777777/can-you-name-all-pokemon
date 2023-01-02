import { BodyOrganism } from "../organisms/Org500/BodyOrganism";
import { HeaderOrganism } from "../organisms/LayoutOrgs/HeaderOrganism";

export const Template500 = () => {
  return (
    <>
      <div className="sticky z-10 top-0 bg-green-200">
        <HeaderOrganism />
      </div>
      <BodyOrganism />
    </>
  );
};
