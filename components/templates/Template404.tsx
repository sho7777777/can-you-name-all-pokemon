import { BodyOrganism } from "../organisms/Org404/BodyOrganism";
import { HeaderOrganism } from "../organisms/LayoutOrgs/HeaderOrganism";

const Template404 = () => {
  return (
    <>
      <div className="sticky z-10 top-0 bg-green-200">
        <HeaderOrganism />
      </div>
      <BodyOrganism />
    </>
  );
};

export default Template404;
