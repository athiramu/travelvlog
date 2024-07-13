import React from 'react';
import './Features.css'
import location from '../images/loc.png'
import calender from '../images/calender.png'
import coupon from '../images/coupon.png'
import feature from '../images/features.png'
function Features() {
    return (
        <>
            <div className='container mx-auto mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-white  rounded-lg p-6'>
                        <h2 className='text-xl font-semibold mb-4 keyfeatures_head'>Key features</h2>
                        <h3 className='keyfeatures_h3'>We offer best services</h3>
                        <p className='text-gray-700 mt-5 w-96'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                            from 45 BC.</p>
                        <div className='grid grid-cols-1  gap-8'>
                            <div className='loc flex items-center'>
                                <img src={location} className='location mr-4' />
                                <div className='w-96'>
                                    <h6 className='h6_features '>We offer best services</h6>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1  gap-8'>
                            <div className='loc flex items-center'>
                                <img src={calender} className='location mr-4' />
                                <div className='w-96'>
                                    <h6 className='h6_features '>Schedule your trip</h6>
                                    <p>It has roots in a piece of classicalt</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1  gap-8'>
                            <div className='loc flex items-center'>
                                <img src={coupon} className='location mr-4' />
                                <div className='w-96'>
                                    <h6 className='h6_features '>Get discounted coupons</h6>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='bg-white  rounded-lg p-6'>
                            <img src={feature}/>
                        </div>
                    </div>
                </div>
            </>
            );
}

            export default Features;
