import {useState, useEffect} from 'react';
import MenuPageSection from './MenuPageSection';
const NavBarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, [])
  return (
    <div className=''>
      {!isOpen && (
      <nav className='flex items-center md:gap-[40%] gap-28 w-full md:px-6 md:py-1  md:max-w-[1400px] absolute md:top-[10%] top-[5%] left-[10%]'>
          <h1 className='md:text-4xl text-2xl font-[alata] text-white'>loopstudios</h1>
          {!isMobile &&  
          ( <div className='menu flex gap-10 capitalize text-white'>
            <li className='relative group cursor-pointer list-none'>
              <a href="#" className='hover:no-underline text-sm font-semibold'>about</a>
              <span className='absolute left-[15%] bottom-[-8px] h-[2px] bg-white transition-all duration-300 group-hover:w-[70%]'></span>
            </li>

            <li className='list-none relative group pointer-cursor'>
              <a href="#" className='text-sm font-semibold hover-no-underline'>career</a>
              <span className='absolute left-[15%] bottom-[-8px] h-[2px] bg-white transition-all duration-300 group-hover:w-[70%]'></span>
            </li>
           
            <li className='list-none relative group'>
               <a href="#" className='text-sm font-semibold hover:no-underline'>events</a>
               <span className='absolute left-[15%] bottom-[-8px] h-[2px] bg-white transition-all group-hover:w-[70%]'></span>
            </li>

             <li className='relative group list-none'>
              <a href="#" className='text-sm font-semibold '>products</a>
              <span className='absolute left-[15%] bottom-[-8px] h-[2px] transition-all bg-white duration-300 group-hover:w-[70%]'></span>
             </li>

              <li className='relative group list-none'>
              <a href="#" className='text-sm font-semibold '>support</a>
              <span className='absolute left-[15%] bottom-[-8px] h-[2px] transition-all bg-white duration-300 group-hover:w-[70%]'></span>
             </li>
         
          </div>
          )
          }
          
          {isMobile && ( <div className="md:hidden z-50 cursor-pointer" onClick={() => setIsOpen(true)}>
           <div className='w-6 h-4 '>
           <img src="images/icon-hamburger.svg"  alt="menu" className="w-full h-full" />
           </div>
           
          </div>)}
         
       </nav>
      )}

       {isOpen && (<div>
        <MenuPageSection onClose={() => setIsOpen(false)} />
       </div>

         )
       }
      
    </div>
  )
}

export default NavBarSection
