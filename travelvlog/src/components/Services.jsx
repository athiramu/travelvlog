import React from 'react';
import './Services.css'

function Services() {
  return (
    <div className='container mx-auto mt-10'>
      <div className='grid grid-cols-3 gap-8'>
        {/* Card 1 */}
        <div className='col-span-1 bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 services-head'>SERVICES</h2>
          <h3 className='services-des'>Our top value categories for you</h3>
        </div>
        {/* Card 2 */}
        <div className='col-span-2 bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>Service 2</h2>
          <p className='text-gray-700'>Description for service 2 goes here. This is where you explain what the service entails and its benefits.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
