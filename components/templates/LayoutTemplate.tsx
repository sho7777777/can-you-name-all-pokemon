import { FC, ReactNode } from 'react';
import { Footer } from '../organisms/LayoutOrgs/Footer';
import { Header } from '../organisms/LayoutOrgs/Header';
import { HeadOrganism } from '../organisms/LayoutOrgs/HeadOrganism';

type Props = {
  children: ReactNode;
}

export const LayoutTemplate: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-green-50">
      <HeadOrganism />
      <Header />
      <div className="relative">{children}</div>
      <Footer />
    </div>
  )
}
