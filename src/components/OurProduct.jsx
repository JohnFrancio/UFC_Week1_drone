import React from 'react'
import { ourProducts } from '../constants'
import ArrowRightIcon from './ArrowRightIcon'

function OurProduct() {
  return (
    <div className='mt-20'>
      <div className='flex flex-col justify-items-center text-center'>
        <h1 className='font-bold text-[42px]'>Our Products</h1>
        <p className='text-gray-700'>Elevate Your Creativity Where Imagination <br /> Takes Flight!</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mt-20'>
        {ourProducts.map((product, index) => (
          <div key={index}>
            <img className={`w-full h-[500px] object-cover ${product.border == 'br' ? 'rounded-br-[80px]' : product.border == 'tl' ? 'rounded-tl-[80px]' : product.border == 'tr' ? 'rounded-tr-[80px]' : 'rounded-bl-[80px]'}`} src={product.img} alt={product.name} />
            <div className='flex justify-between items-center'>
              <div className='mt-5'>
                <h3>{product.name}</h3>
                <p className='text-gray-500'>{product.descri}</p>
              </div>
              <div className="bg-[#F6E0AE] p-2 rounded-full mt-4 transition duration-500 hover:translate-x-2 cursor-pointer -ml-7">
                <ArrowRightIcon size={32} className="ml-[9px] mt-[5px]"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProduct