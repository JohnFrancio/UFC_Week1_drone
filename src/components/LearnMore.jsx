import React from 'react'
import { girl1 } from '../assets'
import PlayIcon from './PlayIcon'

function LearnMore() {
  return (
    <div className='mt-40'>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        <div className='relative'>
          <div className='absolute -top-[75px] blur-2xl bg-[#C407ED]/30 -left-10 w-32 h-32 rounded-full -z-20'></div>
          <div className='flex flex-col gap-3 font-bold text-4xl mb-5'>
            <h2>Empowering innovation, one</h2>
            <h2>drone at a time</h2>
          </div>
          <div className='text-gray-400 text-xl flex flex-col gap-2'>
            <p>"Empowering innovation, one drone at a time" means that</p>
            <p>through our drones, we strive to drive progress and</p>
            <p>creativity in various industries and applications.</p>
          </div>
          <div className='mt-10 mb-5 md:my-10 font-semibold text-[#C407ED]'>
            <a href="#" className='underline underline-offset-4'>Learn more</a>
          </div>
        </div>
        <div className='relative w-full h-72 md:-mt-28'>
          {/* image */}
          <img className='rounded-2xl z-10 h-full w-full object-cover' src={girl1} alt="girl1" />
          {/* for the rectangle */}
          <div className='absolute top-0 left-0 w-24 h-24 rounded-2xl -translate-x-4 -translate-y-4 bg-[#C407ED] -z-20 shadow-2xl'></div>
          <div className='absolute bottom-0 right-0 w-36 h-36 rounded-2xl translate-x-4 translate-y-4 bg-[#F19FBA] -z-20 shadow-2xl'></div>
          {/* for the circle */}
          <div className="absolute top-0 right-0 w-5 h-5 bg-[#9BD3FC] -translate-y-8 rounded-full"></div>
          {/* play icon */}
          <PlayIcon size={40} fill='#C407ED' className="cursor-pointer rounded-full p-2 z-20 absolute top-[45%] left-[45%] bg-white"/>
        </div>
      </div>
    </div>
  )
}

export default LearnMore