import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {}

export default function Hero({ }: Props) {
    const [text, setText] = useTypewriter({
        words: ["Hi, The names Adnaan Fuard", "Guy-who-loves-coffee.tsx", "<ButLovesToCodeMore/>"],
        loop: true,
        delaySpeed: 2000,
    });
    
  return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img src="https://cdn.discord.me/server/a0a090ae5109909436215fee7ef905b6e42a2eb64ccc6f6a7307b80fdc72cac7/icon_ed7370da2247dba42d8fe3a836e7405227e6fdb3ae12f78579499e665411e0e6.jpg" alt="" />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
      <h1 className='text-5xl lg:text-gray-6xl font-semibold px-10'>
        <span className="mr-3">{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>    
    </div>
  )
}