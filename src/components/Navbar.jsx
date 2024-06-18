import React, { useState } from 'react'
import { navLink } from '../constants'
import { arrowDown, close, menu, arrowUp } from '../assets'
import DroneLogo from './DroneLogo'

function Navbar() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const handleDrop = () => {
    setDropDownOpen(!dropDownOpen)
  }
  const [toggle, setToggle] = useState(false);
  return (
    <div className="py-5 font-semibold">
      <nav className="flex justify-between items-center text-white font-bold">
        <div className='flex flex-col justify-center items-center mt-3'>
          <DroneLogo size={45}/>
          <h1 className=''>DRONE</h1>
        </div>
        <ul className="list-none justify-center ml-20 hidden lg:flex">
          {navLink.map((link, index) => (
            <li key={index} className={`relative p-4 ${(index == navLink.length - 1) ? '-mr-20' : 'mr-4'}`}>
              { link.drop ? (
                <>
                <div className='flex gap-1' onClick={handleDrop}>
                  <button className='cursor-pointer'>{link.name}</button>
                  {dropDownOpen ? <img src={arrowUp} alt="" /> : <img src={arrowDown} alt="" />}
                </div>
                {dropDownOpen && (
                  <ul className='absolute mt-1 rounded shadow-lg flex'>
                    {link.drop.map((dropItem, index) => (
                      <li className='px-4 py-2 cursor-pointer' key={index}>{dropItem}</li>
                    ))}
                  </ul>
                )}
                </>
              ) : (
                <a href={`${link.link}`}>{link.name}</a>
              )}
            </li>
          ))}
        </ul>
        <div className='hidden lg:flex gap-2'>
          <button className="cursor-default bg-white text-black text-center border-[1.5px] border-white  w-28 py-2 rounded-full transition duration-500 hover:-translate-y-1">Login</button>
          <button className="cursor-default text-black text-center border-[1.5px] border-white w-28 py-2 rounded-full transition duration-500 hover:-translate-y-1">Register</button>
        </div>
        {/* for nav sm and down */}
        <div className='text-white lg:hidden' onClick={() => setToggle((prev) => !prev)}>
          {(toggle) ? <img className='w-10 h-10' src={close} alt="close" /> : <img className='w-10 h-10' src={menu} alt="menu"/>}
        </div>
        {/* ul for mobile view */}
        <div className={`${toggle ? 'flex' : 'hidden'} overflow-hidden bg-black/25 flex-col p-6 absolute right-0 top-20 rounded-xl sidebar mr-1`}>
          <ul className="list-none flex flex-col">
            {navLink.map((link, index) => (
              <li key={index} className={`relative py-4`}>
                { link.drop ? (
                  <>
                  <div className='flex gap-1' onClick={handleDrop}>
                    <button className='cursor-default'>{link.name}</button>
                    {dropDownOpen ? <img src={arrowUp} alt="arrowUp" /> : <img src={arrowDown} alt="arrowDown" />}
                  </div>
                  {dropDownOpen && (
                    <ul className='absolute -mt-1 shadow-lg flex'>
                      {link.drop.map((dropItem, index) => (
                        <li className='px-2 py-2 cursor-pointer' key={index}>{dropItem}</li>
                      ))}
                    </ul>
                  )}
                  </>
                ) : (
                  <a href={`${link.link}`}>{link.name}</a>
                )}
              </li>
            ))}
          </ul>
          <button className="text-white">Login | Register</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar