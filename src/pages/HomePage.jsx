
import React from 'react'
import NavBar from "../components/Navbar"
import HeroSection from '../components/HeroSection'
import Stats from '../components/Stats'
import Services from '../components/Services'
import WhyChooseSpeedway from '../components/WhyChooseSpeedway'
import ReadyToBook from '../components/ReadyToBook'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
     <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <NavBar />
      <HeroSection />
      <Stats />
      <Services />
      <WhyChooseSpeedway />
      <ReadyToBook />
      <Footer />
    </main>
  )
}

export default HomePage