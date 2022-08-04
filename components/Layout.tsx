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
    // <div className="h-screen bg-violet-400">
    <div className=" bg-violet-400">
      <Head>
        <title>ポケモン（英語で）いえるかな？</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pikachu.ico" />
      </Head>

      <div className='sticky z-50 top-0 w-screen bg-green-300'>
        <Header />
      </div>

      <div className="relative bg-pink-200 pt-2">
        {children}
      </div>

      <div className="sticky bottom-0  w-screen text-center">
        <Footer />
      </div>

    </div>
  )
}
