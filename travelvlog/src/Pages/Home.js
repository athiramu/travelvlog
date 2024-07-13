import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import SectionCmpany from '../components/SectionCmpany'
import Services from '../components/Services'


function Home() {
  return (
    <>
    <div className='mx-auto max-w-[1184px] px-8'>
    <Navbar/>
    <Section1/>
    <SectionCmpany/>
    <Services/>
    </div>
    </>
  )
}

export default Home