import React from 'react'
import { Brand, BlogAndNews, Hero, DroneProduct, Footer, Navbar, Testimonials, OurProduct, HowItWorks, LearnMore } from './components'

function App() {
  return (
    //container
    <div className='overflow-hidden'>
      <div className={`bg-[url('./assets/gradients.jpg')] w-[100%] bg-cover bg-center`}>
        <div className="w-[85%] m-auto">
          <Navbar/>
          <Hero/>
        </div>
      </div>
      <Brand/>
      <div className="w-[85%] m-auto">
        <HowItWorks/>
        <LearnMore/>
        <DroneProduct/>
        <OurProduct/>
        <Testimonials/>
        <BlogAndNews/>
      </div>
      <div className='bg-[#351E39] w-100%'>
        <div className='w-[85%] m-auto'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App