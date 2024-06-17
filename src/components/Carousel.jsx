import React, { useEffect, useState } from 'react'

function Carousel({children: testimonials, autoslide = false, autoslideduration = 3000}) {
    const [curr, setCurr] = useState(0)
    const next = () => setCurr((curr) => curr === testimonials.length - 1 ? 0 : curr + 1)
    useEffect(() => {
        if(!autoslide) return 
        const slideInterval = setInterval(next, autoslideduration);
        return () => clearInterval(slideInterval)
    }, [])
  return (
    <div>
        <div className='flex transition-transform ease-out duration-500'
        style={{ transform : `translateX(-${curr*100}%)`}}>{testimonials}</div>
        <div className='flex items-center justify-center gap-2 mt-16 mb-18'>
            {testimonials.map((_, i) => (
                <div key={i} className={`transition w-3 h-3 rounded-full ${curr === i ? "bg-[#C407ED]" : "bg-gray-300"}`}></div>
            ))}
        </div>
    </div>
  )
}

export default Carousel