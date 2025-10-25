import React from 'react'

const FooterSection = () => {
  return (
    <div className='w-full md:h-[25vh] h-[40vh] bg-black px-[10%] py-[3%]'>
       <div className='flex flex-col gap-8'>

        <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
          <h1 className='text-white text-2xl font-bold'>loopstudios</h1>
          <div className='hidden md:flex gap-4'>
            <div className='relative group cursor-pointer'>
              <img src="./images/icon-facebook.svg" alt="facebook" />
              <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>

             <div className='relative group cursor-pointer'>
              <img src="./images/icon-twitter.svg" alt="twitter" />
              <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>

             <div className='relative group cursor-pointer'>
              <img src="./images/icon-pinterest.svg" alt="pinterest" />
              <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>

             <div className='relative group cursor-pointer'>
              <img src="./images/icon-instagram.svg" alt="instagram" />
              <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-8 gap-2'>
         <li className='relative text-white list-none group cursor-pointer'>
          <a href="#" className='capitalize text-sm'>about</a>
          <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
         </li>
          <li className='relative text-white list-none group'>
          <a href="#" className='capitalize text-sm'>careers</a>
          <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
         </li>
          <li className='relative text-white list-none group'>
          <a href="#" className='capitalize text-sm'>events</a>
          <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
         </li>
          <li className='relative text-white list-none group'>
          <a href="#" className='capitalize text-sm'>products</a>
          <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
         </li>
          <li className='relative text-white list-none group'>
          <a href="#" className='capitalize text-sm'>support</a>
          <span className='absolute -bottom-4 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
         </li>
        </div>

        <div className='flex md:hidden gap-4 md:ml-0 ml-16'>
            <div className='relative group cursor-pointer'>
              <img src="/images/icon-facebook.svg" alt="facebook" className='w-5' />
              <span className='absolute bottom-0 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>

             <div className='relative group cursor-pointer'>
              <img src="/images/icon-twitter.svg" alt="twitter" className='w-5' />
              <span className='absolute bottom-0 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>

             <div className='relative group cursor-pointer'>
              <img src="/images/icon-pinterest.svg" alt="pinterest" className='w-5' />
              <span className='absolute bottom-0 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>

             <div className='relative group cursor-pointer'>
              <img src="/images/icon-instagram.svg" alt="instagram" className='w-5' />
              <span className='absolute bottom-0 left-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
            </div>
          </div>
       </div>
    </div>
  )
}

export default FooterSection
