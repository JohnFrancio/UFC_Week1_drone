import React from 'react'
import { navLink } from '../constants'
import { miniDrone } from '../assets'
import DroneLogo from './DroneLogo'

function Navbar() {
  return (
    <div className="py-5 font-semibold">
      <nav className="flex justify-between items-center overflow-hidden text-white font-bold">
        <div className='flex flex-col justify-center items-center mt-3'>
          <DroneLogo size={45}/>
          <h1 className=''>DRONE</h1>
        </div>
        <ul className="list-none justify-center ml-20 hidden md:flex">
          {navLink.map((link, index) => (
            <li key={index} className={`p-4 ${(index == navLink.length - 1) ? '-mr-20' : 'mr-4'}`}>
              <a href={`#${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2'>
          <button className="bg-white text-black text-center border-[1.5px] border-white  w-28 py-2 rounded-full transition duration-500 hover:-translate-y-1">Login</button>
          <button className="text-black text-center border-[1.5px] border-white w-28 py-2 rounded-full transition duration-500 hover:-translate-y-1">Register</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar