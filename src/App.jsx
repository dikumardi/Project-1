import React from 'react'
import ProjectsContainer from './pages/ProjectsContainer'
import  p1 from './assets/p1.png'
import  p2 from './assets/p2.png'
import  p3 from './assets/p3.png'
import  p4 from './assets/p4.png'
import  p5 from './assets/p5.png'
import ProcessSection from './pages/ProcessSection'
import HeroSection from './pages/HeroSection'
import QuotesSection from './pages/QuotesSection'
import FeatSection from './pages/FeatSection'
import Benifits from './pages/Benifits'
import ServicesPages from './pages/ServicesPages'
import PricingSection from './pages/PricingSection'
import FaqContent from './pages/FaqContent'
import BannerContent from './pages/BannerContent'
import BookingSection from './pages/BookingSection'
import Navbar from './components/Navbar'

const App = () => {
    const ProjectsContainerData = [
      {img1:p1},
      {img2:p2},
      {img3:p3},
      {img4:p4},
      {img5:p5},
     
    ]
   
    


  return (
    <div className='mainLayout h-screen w-full'>
    <Navbar/>
    <HeroSection/>
    <ProjectsContainer img1={p1} img2={p2} img3={p3} img4={p4} img5={p5}/>
    <ProcessSection/>
    <QuotesSection/>
    <FeatSection/>
    <Benifits/>
    <ServicesPages/>
    <PricingSection/>
    <FaqContent/>
    <BannerContent/>
    <BookingSection/>
    </div>
  )
}

export default App