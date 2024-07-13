import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import SectionCmpany from '../components/SectionCmpany'
import Services from '../components/Services'
import TopDestinations from '../components/TopDestinations'
import TravelPoint from '../components/TravelPoint'
import Features from '../components/Features'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
    <div className='mx-auto max-w-[1184px] px-8'>
    <Navbar/>
    <Section1/>
    <SectionCmpany/>
    <Services/>
    <TopDestinations/>
    
    <TravelPoint/>
    <Features/>
    <Footer/>
    </div>
    </>
  )
}

export default Home