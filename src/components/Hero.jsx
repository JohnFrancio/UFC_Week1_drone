import React from 'react'
import { heroImage } from '../assets'
import PlayIcon from './PlayIcon'

function Hero() {
  return (
    <div className='overflow-hidden'>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className='text-white my-10 md:my-20'>
          <div className='flex flex-col gap-3 font-bold text-4xl md:text-7xl'>
            <h1>The Best View</h1>
            <h1>In The World</h1>
            <h1>From Your Site</h1>
          </div>
          <p className='my-8 font-semibold'>Provides you with the latest online learning system and material <br /> that help your knowledge growing.</p>
          <div className="flex gap-4 md:gap-8 font-semibold">
            <button className="bg-white text-black cursor-default text-center border-[1.5px] border-white w-36 py-2 rounded-full transition duration-500 hover:-translate-y-1">Get Started</button>
            <button className='flex items-center gap-1 md:gap-3 text-center transition cursor-default duration-500 hover:-translate-y-1'>
              <span className='bg-gradient-to-tl from-white rounded-full p-1'><PlayIcon size={30} className="bg-white opacity-[100%] p-1 rounded-full animate-pulse"/></span>
              <span className='font-bold underline text-lg underline-offset-4'>Watch Video</span>
            </button>
          </div>
        </div>
        <div className='m-0'>
          <img className='w-[100%] h-auto bg-center' src={heroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero