import React from 'react';
import './Services.css'
import tour from '../images/tourguide.png'
import weather from '../images/weather.png'
import booking from '../images/booking.png'

function Services() {
  return (
    <div className='container mx-auto mt-5 mb-5'>
      <div className='grid grid-cols-3'>
        {/* Card 1 */}
        <div className='col-span-1 bg-white  rounded-lg p-6 mt-28'>
          <h2 className='text-xl font-semibold mb-4 services-head'>SERVICES</h2>
          <h3 className='services-des'>Our top value categories for you</h3>
        </div>
        {/* Card 2 */}
        <div className='col-span-2 rounded-lg p-6'>
    
         

          <div className='grid grid-cols-3 gap-4'>
            {/* Nested Card 1 */}
            <div className='shadow  shadow-slate-200 rounded-lg p-4 '>
              <img src={tour} className='mx-auto mt-8'/>
             
              <h5 className='h5_services mt-10 whitespace-nowrap'>Best Tour Guide</h5>
              <p className='text-gray-600 mt-5 text-center'>What looked like a small patch of purple grass, above five feet.</p>
            </div>
            <div className='shadow  shadow-slate-200 rounded-lg p-4 '>
              <img src={booking} className='mx-auto mt-8'/>
             
              <h5 className='h5_services mt-10 whitespace-nowrap'>Easy Booking</h5>
              <p className='text-gray-600 mt-5 text-center'>Square, was moving across the sand in their direction.</p>
            </div>
            <div className='shadow  shadow-slate-200 rounded-lg p-4 '>
              <img src={weather} className='mx-auto mt-8'/>
             
              <h5 className='h5_services mt-10 whitespace-nowrap'>Weather Forecast</h5>
              <p className='text-gray-600 mt-5 text-center'>What looked like a small patch of purple grass, above five feet.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
