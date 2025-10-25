import React from 'react'

const GenerationSection = () => {
  return (
    <div className='w-full md:h-[150vh] h-[200vh] bg-white px-[10%]'>
      <div className='text-center md:flex justify-between'>
        <h1 className='md:text-5xl text-3xl uppercase font-extralight'>our creations</h1>
        <button className='hidden md:block bg-black md:px-12 py-0 text-white uppercase tracking-widest leading-none cursor-pointer'>see all</button>
      </div>
      <div className='flex flex-col md:grid grid-cols-4 gap-y-6 mt-18'>
        <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-deep-earth.jpg" alt="deep-earth" className='hidden md:block w-full object-cover' />
            <img 
         src="/images/mobile/image-deep-earth.jpg" 
         alt="deep-earth-mobile" 
         className='block md:hidden w-full object-cover' 
  />
          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'>
    </div>
          <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
            <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[50%] tracking-wider md:leading-8 leading-none'>deep earth</h1>
          </div>
        </div>
          <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-night-arcade.jpg" alt="night-arcade" className='hidden md:block w-full object-cover' />
          <img src="/images/mobile/image-night-arcade.jpg" alt="night arcade" className='block md:hidden w-full object-cover'/>

           <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
            <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[50%] tracking-wider md:leading-8 leading-none'>night arcade</h1>
          </div>
        </div>
          <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-soccer-team.jpg" alt="deep-earth"  className='hidden md:block w-full object'/>
         <img src="/images/mobile/image-soccer-team.jpg" alt="soccer-team" className='block md:hidden w-full object-cover'/>

          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
             <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
            <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[70%] tracking-wider md:leading-8 leading-none'>soccer team vr</h1>
          </div>
        </div>
          <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-grid.jpg" alt="the grid" className='hidden md:block w-full' />

          <img src="/images/mobile/image-grid.jpg" alt="the grid" className='block md:hidden w-full object-cover' />

          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
             <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
            <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[50%] tracking-wider md:leading-8 leading-none'>the grid</h1>
          </div>
        </div>
          <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-from-above.jpg" alt="from-above" className='hidden md:block w-full' />
          <img src="/images/mobile/image-from-above.jpg" alt="" className='block md:hidden w-full object-cover'/>
          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
             <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
            <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[70%] tracking-wider md:leading-8 leading-none'>from up above vr</h1>
          </div>
        </div>
          <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-pocket-borealis.jpg" alt="pocket-borealis" className='hidden md:block w-full' />

          <img src="/images/mobile/image-pocket-borealis.jpg" alt="pocket-borealis" className='block md:hidden w-full object-cover' />
          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
             <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
            <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[50%] tracking-wider md:leading-8 leading-none'>pocket borealis</h1>
          </div>
        </div>
          <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-curiosity.jpg" alt="curiosity" className='hidden md:block w-full'/>
          <img src="/images/mobile/image-curiosity.jpg" alt="curiosity" className='block md:hidden w-full object-cover'/>
          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
             <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
            <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[50%] tracking-wider md:leading-8 leading-none'>the curiosity</h1>
          </div>
        </div>
          <div className='md:col-span-1 md:w-[250px] w-full relative group cursor-pointer'>
          <img src="/images/desktop/image-fisheye.jpg" alt="fisheye" className='hidden md:block w-full'/>
          <img src="/images/mobile/image-fisheye.jpg" alt="" className='block md:hidden w-full object-cover'/>
          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
         <div className='absolute md:bottom-10 bottom-2 left-10 z-10'>
        <h1 className='uppercase text-white md:text-3xl text-xl font-extralight w-[70%] tracking-wider'>make it fisheye</h1>
          </div>
        </div>


         <div className='md:hidden border-2 border-gray-500 w-[150px] h-[35px] flex  justify-center ml-12'>
          <button className='md:px-12 py-0 text-black uppercase tracking-widest leading-none cursor-pointer '>see all</button>
         </div>
      </div>
    </div>
  )
}

export default GenerationSection
