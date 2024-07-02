'use client'


import { Inter } from 'next/font/google';

import { useRouterContext } from './components/providers/routerProvider';
import { useState, useEffect } from "react";

import Main from './components/main/main';
import Boost from './components/boost/boost';
import Earn from './components/earn/earn';

import { DefaultIcons } from './components/shared/defaultIcons';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {

  const { router } = useRouterContext();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    DefaultIcons.map((item) => {
      if(item.path == router) {
        setCurrentIndex(item.id);
      }
    })
  }, [router])

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

        <div key={0} className="min-w-full flex flex-col justify-end">
          <Main />
        </div>
        <div key={1} className="min-w-full flex flex-col justify-end">
          <Boost />
        </div>
        <div key={2} className="min-w-full flex flex-col justify-end">
          <Earn />
        </div>
        <div key={3} className="min-w-full flex flex-col justify-end">
          <Main />
        </div>
        <div key={4} className="min-w-full flex flex-col justify-end">
          <Main />
        </div>
      </div>
    </div>
  );
}
