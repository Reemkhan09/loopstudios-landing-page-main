import React from 'react'

const MenuPageSection = ({onClose}) => {


  return (
    <div className='fixed inset-0 bg-black max-w-[500px] w-[400px] h-screen text-white z-[100]'>
      <div className='flex flex-col gap-24'> 
          <div className='flex  gap-24 px-8 py-10'>
            <h1 className='text-3xl font-semibold'>loopstudios</h1>
            <div className='cross flex items-center' onClick={onClose}>
              <img src="/images/icon-close.svg" alt="close" />
            </div>
          </div>
          <div className='menu flex flex-col gap-4 px-8'>
             <li className='list-none'>
              <a href="#" className='text-[1.7rem] uppercase font-extralight text-gray-300'>About</a>
             </li>
             <li className='list-none'>
              <a href="#" className='text-[1.7rem] uppercase font-extralight text-gray-300'>Careers</a>
             </li>
             <li className='list-none'>
              <a href="#" className='text-[1.7rem] uppercase font-extralight text-gray-300'>Events</a>
             </li>
             <li className='list-none'>
              <a href="#" className='text-[1.7rem] uppercase font-extralight text-gray-300'>Products</a>
             </li>
             <li className='list-none'>
              <a href="#" className='text-[1.7rem] uppercase font-extralight text-gray-300'>Support</a>
             </li>
          </div>
      </div>
    </div>
  )
}

export default MenuPageSection
