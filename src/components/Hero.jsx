'use client';
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center w-full py-20'>
      <div className='z-0 flex flex-col items-center justify-center w-full h-full'>
        <div className='text-4xl font-extrabold md:text-6xl text-neutral-400 hover:cursor-default drop-shadow-lg'>
          Design the best <br className='max-sm:hidden' />
          <span className='text-5xl text-black md:text-7xl'>3D MODELS</span> for your game
        </div>
      </div>
    </div>
  )
}

export default Hero
