import React from 'react'
import Home from './pages/HeroSection'
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
import Footer from './pages/PricingSection'

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
    <HeroSection/>
    <ProjectsContainer img1={p1} img2={p2} img3={p3} img4={p4} img5={p5}/>
    <ProcessSection/>
    <QuotesSection/>
    <FeatSection/>
    <Benifits/>
    <ServicesPages/>
    <Footer/>
    </div>
  )
}

export default App