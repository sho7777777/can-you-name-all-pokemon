// Component
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-green-50">
      <Head>
        <title>ポケモン（英語で）いえるかな？</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pikachu.ico" />
      </Head>

      <div className='sticky z-10 top-0 bg-green-200'>
        <Header />
      </div>

      <div className="relative">
        {children}
      </div>

      <div className="sticky bottom-0 text-center">
        <Footer />
      </div>

    </div>
  )
}
