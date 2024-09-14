'use client';

import React, { useCallback, useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { FcMindMap, FcSearch } from 'react-icons/fc'

const SearchBar = () => {

  const [isDown, setIsDown] = useState(false);

  return (
    <div

      className='relative flex items-center justify-center w-full px-4 py-16 md:w-3/4 lg:w-1/2 drop-shadow-lg'>
      <div className='flex items-center justify-center w-full overflow-hidden bg-purple-200 rounded-full shadow-xl h-14 lg:h-20 md:h-16 '>
        <div id='category' className='absolute flex items-center justify-center p-4 bg-orange-100 rounded-full shadow-lg right-80 max-md:hidden' >
          <FcMindMap size={30} className='drop-shadow-lg' />
        </div>
        <div
          onClick={useCallback((() => {
            if (isDown) {
              setIsDown(false);
            } else {
              setIsDown(true);
            }
          }), [isDown])}
          className='absolute flex flex-col items-center gap-1 px-4 py-2 text-xl font-light bg-orange-100 rounded-full shadow-xl text-neutral-400 justiy-center hover:cursor-pointer right-24 max-md:hidden'>
          <span className='flex flex-row items-center justify-center'>select category {isDown && (<FaCaretUp />)} {!isDown && (<FaCaretDown />)}</span>

        </div>
        <div className='absolute px-4 py-2 text-xl font-light bg-orange-100 rounded-full shadow-xl text-neutral-400 lg:left-32 max-sm:right-8'>
          search any model
        </div>
      </div>
      <div id='glass' className='absolute flex items-center justify-center p-2 bg-orange-100 rounded-full shadow-lg left-6 md:left-8 md:p-3 lg:p-4'>
        <FcSearch size={30} className='drop-shadow-lg' />
      </div>
    </div>
  )
}

export default SearchBar
