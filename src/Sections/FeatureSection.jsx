import React from 'react'

const FeatureSection = () => {
  return (
    <div className='bg-white w-full md:h-[110vh] md:relative flex flex-col items-center md:block gap-8 md:gap-0'>
      <div className='md:absolute md:left-[10%] md:top-[10%] md:w-[750px] md:h-[500px] md:z-4 md:py-8'>
        <img src="images/desktop/image-interactive.jpg" alt="interactive-image" className='hidden md:block w-full h-full' />
        <img src="images/mobile/image-interactive.jpg" alt="interactive-image"  className='block md:hidden w-[300px] h-[200px] mt-8'/>
      </div>
      <div className='md:absolute md:top-[32%] md:right-[4%] md:z-5 md:w-[700px]'>
       <div className='bg-white flex flex-col md:px-24 px-16 py-14'>
          <h1 className='uppercase md:text-5xl text-[1.8rem] text-black font-extralight md:mt-0 -mt-12'>the leader in interactive vr</h1>
          <p className='text-gray-400 text-sm md:mt-8 mt-4 font-[alata] md:w-[94%] md:text-md'>Founded in 2011,Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
         </div>
      </div>
    </div>  
  )
}

export default FeatureSection
