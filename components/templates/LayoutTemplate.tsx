import { FC, ReactNode } from "react";
import { FooterOrganism } from "../organisms/LayoutOrgs/FooterOrganism";
import { HeaderOrganism } from "../organisms/LayoutOrgs/HeaderOrganism";
import { HeadOrganism } from "../organisms/LayoutOrgs/HeadOrganism";

type Props = {
  children: ReactNode;
};

export const LayoutTemplate: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-green-50">
      <HeadOrganism />
      <HeaderOrganism />
      <div className="relative">{children}</div>
      <FooterOrganism />
    </div>
  );
};
