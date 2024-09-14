'use client';

import React from 'react'
import ScrollCard from './ScrollCard'


const Assets = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col  gap-4 items-start justify-center md:px-8 lg:px-10 px-2'>
      <div className='flex flex-col items-center justify-center w-full gap-2 md:flex-row md:gap-4'>
        <ScrollCard width='full' mdwidth='md:w-2/3' color='bg-purple-300' />
        <ScrollCard width='full' mdwidth='w-1/3' color='bg-red-300' />
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-2 md:flex-row md:gap-4'>
        <ScrollCard width='full' mdwidth='md:w-1/3' color='bg-yellow-300' />
        <ScrollCard width='full' mdwidth='w-2/3' color='bg-green-300' />
      </div>
    </div>
  )
}

export default Assets