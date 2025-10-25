
import './App.css';
import HeroSection from './Sections/HeroSection';
import FeatureSection from './Sections/FeatureSection';
import GenerationSection from './Sections/GenerationSection';
import FooterSection from './Components/FooterSection';
import MenuPageSection from './Components/MenuPageSection';

function App() {


  return (
  
    <section className='main w-full min-h-screen flex flex-col items-center bg-[#101010]'>

    <HeroSection />
    <FeatureSection />
    <GenerationSection />
    <FooterSection />
    {/* <MenuPageSection /> */}
    </section>
      
    
  )
}

export default App
