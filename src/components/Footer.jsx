import React from 'react'
import DroneLogo from './DroneLogo'
import { Services, logoSocials, usefulLink } from '../constants'
import { arrowDown, capadrone } from '../assets'

function Footer() {
  return (
    <div>
      <div className='flex justify-between items-center py-8 border-b-[1.5px] border-gray-700'>
        <div className='flex flex-col justify-center items-center mt-3 text-white'>
          <DroneLogo size={45}/>
          <h1 className='font-bold'>DRONE</h1>
        </div>
        <ul className='flex gap-3'>
          {logoSocials.map((logo, index) => (
            <img className={`${index == logoSocials.length - 1 ? 'mr-0 md:mr-10' : 'mr-0'} transition duration-200 hover:rotate-12 hover:scale-125`} key={index} src={logo.logo} alt={logo.name} />
          ))}
        </ul>
      </div>
      {/* for medium device and up */}
      <div className="hidden md:grid grid-cols-[15%_15%_30%_40%] items-center border-b-[1.5px] py-3 border-gray-700">
        <div><h1 className='font-bold text-xl text-white'>Usefull Link</h1></div>
        <div><h1 className='font-bold text-xl text-white'>Services</h1></div>
        <div><h1 className='font-bold text-xl text-white'>Contact Us</h1></div>
        <div className='w-10 h-10 p-2 bg-[#351E39] border-[1px] border-gray-700 rounded-full'>
          <img src={arrowDown} alt="down arrow" />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-[15%_15%_27%_43%] items-center border-b-[1.5px] py-10 border-gray-700">
        <div className='font-semibold text-white'>
          <ul className='flex flex-col gap-2'>
            {usefulLink.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='font-semibold text-white'>
          <ul className='flex flex-col gap-2'>
            {Services.map((service, index) => (
              <li key={index}>
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-center text-white rounded-2xl w-full h-auto bg-gradient-to-r from-gray-800 to-gray-400 p-[1px]'>
            <div className='h-full w-full bg-[#351E39] rounded-2xl'>
              <div className='p-5'>
                <h3 className='text-xl'>Jamma Masjid Gali Ward No2</h3>
              </div>
            </div>
          </div>
          <div className='text-white rounded-2xl w-full h-auto bg-gradient-to-r from-gray-800 to-gray-400 p-[1px]'>
            <div className='h-full w-full bg-[#351E39] rounded-2xl'>
              <div className='ml-1 p-5'>
                <h3 className='text-xl'>+923013781848</h3>
                <h3 className='text-xl'>Profilbilal1@Gmai</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='relative ml-10'>
          <div className='absolute w-40 p-3 rounded-md top-[43%] left-[33%] opacity-70 bg-white text-center animate-bounce'>
            <h1>Play Now</h1>
          </div>
          <img className='w-[100%] h-52 rounded-3xl object-cover' src={capadrone} alt="down arrow" />
        </div>
      </div>
      {/* for medium device and down */}
      <div className="md:hidden grid grid-cols-2 border-b-[1.5px] py-3 border-gray-700">
        <div className='text-white'>
          <h1 className='font-bold text-xl '>Usefull Link</h1>
          <ul className='flex flex-col gap-2'>
            {Services.map((service, index) => (
              <li key={index}>
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-white'>
          <h1 className='font-bold text-xl '>Services</h1>
          <ul className='flex flex-col gap-2'>
            {Services.map((service, index) => (
              <li key={index}>
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='md:hidden grid grid-cols-[25%_75%] items-center border-b-[1.5px] py-5 border-gray-700'>
        <div>
          <h1 className='font-bold text-xl text-white'>Contact Us</h1>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-center text-white rounded-2xl w-full h-auto bg-gradient-to-r from-gray-800 to-gray-400 p-[1px]'>
            <div className='h-full w-full bg-[#351E39] rounded-2xl'>
              <div className='p-2'>
                <h3 className='text-xl'>Jamma Masjid Gali Ward No2</h3>
              </div>
            </div>
          </div>
          <div className='text-white rounded-2xl w-full h-auto bg-gradient-to-r from-gray-800 to-gray-400 p-[1px]'>
            <div className='h-full w-full bg-[#351E39] rounded-2xl'>
              <div className='ml-2 p-2'>
                <h3 className='text-xl'>+923013781848</h3>
                <h3 className='text-xl'>Profilbilal1@Gmai</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden relative my-5 border-b-[1.5px] py-5 border-gray-700'>
        <div className='absolute w-40 p-3 rounded-md top-[43%] left-[24%] opacity-70 bg-white text-center animate-bounce'>
          <h1>Play Now</h1>
        </div>
        <img className='w-[100%] h-52 rounded-3xl object-cover' src={capadrone} alt="down arrow" />
      </div>
      <div className='flex justify-center p-10'>
        <h1 className='text-white'>Copyright &copy; John Francio</h1>
      </div>
    </div>
  )
}

export default Footer