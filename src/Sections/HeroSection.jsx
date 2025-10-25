import { useState, useEffect} from 'react'
import NavBarSection from '../Components/NavBarSection'

const HeroSection = () => {
 const [isMobile, setIsMobile] = useState(false); // Initialize isMobile

 useEffect(() => {
   const handleResize = () => {
     setIsMobile(window.innerWidth <= 768);
   };
   handleResize();
   window.addEventListener('resize', handleResize);
   return () => window.removeEventListener('resize', handleResize);
 }, []);

  return (
    <div className='w-full relative'>
     
    <div className='md:h-[85vh] h-[80vh] w-full bg-center relative' style={{
      backgroundImage: isMobile ? 'url("/images/mobile/image-hero.jpg")' : 'url("/images/desktop/image-hero.jpg")', 
       backgroundSize: isMobile ? 'cover' : 'cover',
         backgroundRepeat: 'no-repeat',
        
    }}>

       <NavBarSection />

       <div className='absolute top-[40%] left-[10%] flex flex-col border-2 border-white md:px-16 px-6 py-4'>
          <h1 className='md:text-[5rem] text-[2.5rem] font-extralight uppercase text-white leading-none'>immersive</h1>
          <h1 className='md:text-[5rem] text-[2.5rem] font-extralight uppercase text-white leading-none'>experiences</h1>
          <h1 className='md:text-[5rem] text-[2.5rem] font-extralight uppercase text-white leading-none md:w-full w-[50%]'>that deliver</h1>
       </div>
    </div>
    </div>
  )
}

export default HeroSection
