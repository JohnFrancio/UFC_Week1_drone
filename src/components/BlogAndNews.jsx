import React from 'react'
import { blogs } from '../constants'
import StraightArrow from './StraightArrow'

function BlogAndNews() {
  return (
    <div className='my-20'>
      <div className='grid grid-cols-1 justify-items-center text-center'>
        <h1 className='font-bold text-[42px]'>Blog And News</h1>
        <p className='text-gray-400 font-semibold'>Latest News</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-10">
        {blogs.map((blog, index) => (
          <div key={index}>
            <img className='w-full h-80 rounded-3xl object-cover' src={blog.img} alt={blog.user} />
            <h3 className='my-3 font-semibold'>By {blog.user} - {blog.post} - {blog.date}</h3>
            <h2 className='font-bold text-3xl mb-5'>{blog.title}</h2>
            <p className='text-lg'>{blog.content}</p>
            <div className='flex items-center gap-3 mt-8 transition duration-500 hover:-translate-y-1'>
              <h3 className='text-[#C407ED] font-semibold'>View Post</h3>
              <StraightArrow className="rotate-90" stroke={"#C407ED"}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogAndNews