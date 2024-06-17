import React from 'react'
import { brandLogo } from '../constants'

function Brand() {
  return (
    <div className='-mt-8 flex gap-32 justify-center items-center border-b-2 border-t-2 border-gray-200 w-[85%] m-auto overflow-hidden'>
      {brandLogo.map((logo, index) => (
        <img key={index} className={`${logo.name == "vs" ? 'w-20 h-18' : 'w-26 h-8'} my-10`} src={logo.img} alt={logo.name} />
      ))}
    </div>
  )
}

export default Brand