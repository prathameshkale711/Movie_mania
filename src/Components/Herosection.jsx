import React from 'react'
import heroImage from '/public/view.png'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-2  h-96 mx-40 mt-15 rounded-3xl px-8 items-center gap-8'>
      {/* left part - text */}
        <div className=' h-full  flex flex-col justify-center gap-4'>
            <h1 className='text-6xl text-white text-shadow-lg '> <i><strong>FilmMatrix</strong></i></h1>
            <p className='text-2xl mt-4 text-white'>“Explore Movies Like Never Before.”</p>
        </div>

      {/* right part - image */}
        <div className='  mb-10 h-full'>
            <img className='w-full h-full  object-cover rounded-3xl' src={ heroImage} alt="Hero" />
        </div>
    </div>
  )
}

export default HeroSection