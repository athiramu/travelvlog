import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import SectionCmpany from '../components/SectionCmpany'
import Services from '../components/Services'
import TopDestinations from '../components/TopDestinations'


function Home() {
  return (
    <>
    <div className='mx-auto max-w-[1184px] px-8'>
    <Navbar/>
    <Section1/>
    <SectionCmpany/>
    <Services/>
    <TopDestinations/>
    </div>
    </>
  )
}

export default Home