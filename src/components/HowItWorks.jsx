import React from 'react'
import { howItWorks } from '../constants'

function HowItWorks() {
  return (
    <div className='my-20'>
      <div className='grid grid-cols-1 justify-items-center text-center'>
        <h1 className='font-bold text-[42px]'>How It Works</h1>
        <p className='text-gray-400 font-semibold'>Our drones capture moments with a <br /> bird's eye view</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {howItWorks.map((work, index) => (
          <div key={index} className='text-center'>
            <img className={`${work.name === 'GPS' ? 'animate-bounce' : 'animate-pulse duration-700'} text-center w-20 h-20 m-auto`} src={work.img} alt={work.name} />
            <h1 className='font-bold text-2xl mb-6'>{work.name}</h1>
            <p className='text-gray-400'>{work.descri}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks