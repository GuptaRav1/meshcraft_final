'use client';
import React from 'react';
import { useCallback, useEffect, useState } from "react";
import Logo from "../navbar/Logo";
import { Link } from "react-router-dom"


interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;

}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,

}) => {

  const handleClose = useCallback(() => {

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const [showModal, setShowModal] = useState(isOpen);


  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen]);









  return (

    <div
      className={`
          justify-end
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-40
          outline-none
          focus:outline-none
          translate duration-500
          ${showModal ? `translate-x-0` : `translate-x-full`}
          bg-neutral-800/70
        `}
    >

      <div className={` z-10 rounded-l-2xl w-[90vw] md:w-1/2 lg:w-1/4 h-full flex flex-col items-start justify-center translate duration-1000 ease-in-out bg-amber-50/100 shadow-2xl ${showModal ? `translate-x-0` : `translate-x-full`} `}>
        <Logo />
        <div className="flex flex-row items-center justify-center w-full gap-4 -mt-12">
          <div className="p-2 px-10 ml-4 text-xl font-bold rounded-full bg-neutral-200 hover:cursor-pointer">
            SignIn
          </div>
          <div className="p-2 px-10 ml-4 text-xl font-bold rounded-full bg-neutral-200 hover:cursor-pointer">
            Login
          </div>
        </div>
        <div className='p-4'>
          <span className='text-lg text-neutral-300'>Menu</span>
        </div>
        <div className='flex flex-col w-auto h-auto p-4 text-4xl md:text-5xl'>

          <Link to={'/'}>
            <div className='flex flex-row gap-0 '>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>H</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>o</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>m</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>e</span>
            </div>
          </Link>

          <div className='flex flex-row gap-0 '>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>W</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>h</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>a</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>t</span>
            <span className='my-2 ml-3 font-medium transition hover:cursor-pointer hover:scale-125'>w</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>e</span>
            <span className='my-2 ml-3 font-medium transition hover:cursor-pointer hover:scale-125'>d</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>o</span>
          </div>

          <div className='flex flex-row gap-0'>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>P</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>r</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>o</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>j</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>e</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>c</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>t</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>s</span>
          </div>
          <div className='flex flex-row gap-0'>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>S</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>e</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>r</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>v</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>i</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>c</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>e</span>
            <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>s</span>
          </div>
          <Link to={'/market'}>
            <div className='flex flex-row gap-0'>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>M</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>a</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>r</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>k</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>e</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>t</span>
              <span className='my-2 ml-3 font-medium transition hover:cursor-pointer hover:scale-125'>P</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>l</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>a</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>c</span>
              <span className='my-2 font-medium transition hover:cursor-pointer hover:scale-125'>e</span>
            </div>
          </Link>
        </div>
        <div className='flex flex-col gap-2 p-4 mt-4'>
          <span className='text-lg text-neutral-300'>Get in touch</span>
          <div className='flex flex-row items-center justify-center gap-10 md:gap-16'>
            <span className='font-light text-black underline text-md md:text-xl decoration-2 hover:cursor-pointer'>email@gmail.com</span>
            <span className='font-light text-black underline text-md md:text-xl hover:cursor-pointer'>our workflow</span>
          </div>
        </div>
      </div>

    </div >

  );
}

export default Modal
