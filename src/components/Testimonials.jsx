import React from 'react'
import Carousel from './Carousel'
import { testimonials } from '../constants'
import { quotes } from '../assets'

function Testimonials() {
  return (
    <div className='my-20'>
      <div className='grid grid-cols-1 justify-items-center text-center'>
        <h1 className='font-bold text-[42px]'>Testimonials</h1>
        <p className='text-gray-400 font-semibold'>What People Says</p>
      </div>
      <div className="max-w-[100%] overflow-hidden my-20">
        <Carousel autoslide={true}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-[#fcf0d4] relative flex flex-col md:flex-row items-center gap-8 min-w-[100%] h-auto p-10 rounded-xl'>
              <div className='absolute top-0 right-2 md:right-4'>
                <img className='w-12 h-12 md:w-16 md:h-16' src={quotes} alt="" />
              </div>
              <div >
                <img className='rounded-xl min-w-[72] md:min-w-[500px] h-72 object-cover' src={testimonial.img} alt={testimonial.name} />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-lg leading-8">{testimonial.content}</p>
                <h2 className='font-bold mt-3 text-neutral-800'>{testimonial.name}</h2>
                <p className='text-gray-700'>{testimonial.post}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials