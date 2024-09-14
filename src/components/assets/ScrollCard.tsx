'use client';

import React, { useEffect, useState } from 'react'

interface ScrollCardProps {
  mdwidth: string;
  width: string;
  color: string;
}

const ScrollCard: React.FC<ScrollCardProps> = ({
  mdwidth,
  width,
  color,

}) => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const triggerPosition = 300;
    if (scrollPosition > triggerPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={`${mdwidth} ${width} ${color}  ${isVisible ? 'opacity-100 translate-x-0' : '-translate-x-full opacity-0'}  h-56 md:h-96 transition-transform duration-[3000ms] ease-in-out rounded-2xl 
    shadow-lg drop-shadow-lg relative flex items-center justify-center`}>
      test
    </div>
  )
}

export default ScrollCard
