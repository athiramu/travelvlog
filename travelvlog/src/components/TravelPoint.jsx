import React from 'react';
import travelpoint from '../images/Group 9238travelpoint.png';
import circle from '../images/circletravelpoint.png'
import './Travelpoint.css'

function TravelPoint() {
  return (
    <>
      <div className='container mx-auto mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white flex justify-start'>
            <img src={travelpoint} className='travepoint_pic' />
          </div>
          <div className='flex flex-col justify-end w-96'>
            <div className='rounded-lg p-6'>
              <p className='text-xl font-semibold mb-4 travelpoint-text'>Travel Point</p>
              <h3 className='travelpoint-h3'>We helping you find your dream location</h3>
              <p className='text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
              
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
              <div className='bg-white shadow-lg rounded-lg p-4 '>
                <h4 className='text-lg font-semibold mb-2 travelpoint-number flex justify-center'>500+</h4>
                <p className='p-travelpoint flex justify-center'>Holiday Package</p>
              </div>
              <div className='bg-white shadow-lg rounded-lg p-4'>
              <h4 className='text-lg font-semibold mb-2 travelpoint-number flex justify-center'>100</h4>
              <p className='p-travelpoint flex justify-center'>Luxury Hotel</p>
              </div>
              <div className='bg-white shadow-lg rounded-lg p-4'>
              <h4 className='text-lg font-semibold mb-2 travelpoint-number flex justify-center'>7</h4>
                <p className='p-travelpoint flex justify-center'>Premium Airlines</p>
              </div>
              <div className='bg-white shadow-lg rounded-lg p-4'>
              <h4 className='text-lg font-semibold mb-2 travelpoint-number flex justify-center'>2K+</h4>
              <p className='p-travelpoint flex justify-center'>Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelPoint;
