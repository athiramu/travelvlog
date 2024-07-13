import React from 'react'
import img1 from '../images/s1.png'
import img2 from '../images/s2.png'
import img3 from '../images/s3.png'
import img4 from '../images/s4.png'
import img5 from '../images/s5.png'
import './Sectioncmpany.css'

function SectionCmpany() {
  return (
    <>
      <div className='grid grid-cols-5 gap-4 company_group mx-auto mt-20 fixed-width  py-16   justify-center'>
        <img src={img1} alt="Image 1" className='w-40 h-auto mt-1'/>
        <img src={img2} alt="Image 2" className='w-32 h-auto'/>
        <img src={img3} alt="Image 3" className='w-40 h-auto mt-1 '/>
        <img src={img4} alt="Image 4" className='w-28 h-auto'/>
        <img src={img5} alt="Image 5" className='w-32 h-auto '/>
      </div>
    </>
  )
}

export default SectionCmpany
