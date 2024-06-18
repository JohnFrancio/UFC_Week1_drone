import React from 'react'
import { girl2 } from '../assets'
import PlayIcon from './PlayIcon'
import { qualities } from '../constants'

function DroneProduct() {
  return (
    <div className='mt-28'>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <div className=''>
          <div className='md:-translate-x-4'>
            <div className='flex flex-col gap-3 font-bold text-4xl mb-5'>
              <h2>These Are Often considered</h2>
              <h2>For Drone Product Quality</h2>
            </div>
            <div className='text-gray-700 text-md flex flex-col gap-1'>
              <p>As Of My Last Update In September 2021, I Can Provide You</p>
              <p>With Three Key Factors That Are Often Considered For</p>
              <p>Drone Product Quality.</p>
            </div>
          </div>
          <div className='relative w-full h-80 my-16'>
            {/* image */}
            <img className='rounded-2xl z-10 h-full w-full object-cover' src={girl2} alt="girl1" />
            {/* for the rectangle */}
            <div className='absolute top-0 left-0 w-24 h-24 rounded-2xl -translate-x-4 -translate-y-4 bg-[#C407ED] -z-20 shadow-2xl'></div>
            <div className='absolute bottom-0 right-0 w-36 h-36 rounded-2xl translate-x-4 translate-y-4 bg-[#F19FBA] -z-20 shadow-2xl'></div>
            {/* play icon */}
            <PlayIcon size={40} fill='#C407ED' className="cursor-pointer rounded-full p-2 z-20 absolute top-[45%] left-[45%] bg-white"/>
          </div>
        </div>
        <div className='flex flex-col gap-10 md:-translate-y-10 md:-ml-5'>
          {qualities.map((quality, index) => (
            <div key={index} className='relative transition duration-300 hover:scale-105 rounded-[30px] w-full h-auto bg-gradient-to-l from-transparent via-transparent via-50% p-[1.5px]'>
              <div className='h-full w-full bg-gradient-to-r from-transparent via-white to-white rounded-[30px]'>
                <div className="absolute top-[60.5px] left-10 w-5 h-5 bg-[#C407ED] -translate-y-8 rounded-full"></div>
                <div className='p-5 ml-14'>
                  <h3 className='font-semibold text-xl mb-3'>{quality.title}</h3>
                  <p className='text-gray-700 text-sm'>{quality.descri}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DroneProduct