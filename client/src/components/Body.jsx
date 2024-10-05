import React from 'react'
import Hero from './Hero'
import About from './About'
import Assets from './assets/Assets'

const Body = () => {
  return (
    <div className='bg-[var(--color-primary)]'>
      <Hero />
      <About />
      <Assets />
    </div>
  )
}

export default Body
