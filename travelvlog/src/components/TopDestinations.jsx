import React from 'react';
import './TopDestination.css';
import carousel1 from '../images/carousel1.png'
import carousel2 from '../images/caarousel2.png'
import carousel3 from '../images/carousel3.png'
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function TopDestinations() {
    return (
        <>
            <div className='container mt-10 mb-10 topdestination'>
                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <h5 className='topdestination_head'>Top Destination</h5>
                        <h3 className='topdestination_head2'>Explore top destinations</h3>
                    </div>
                    <div className='rightarrow-carousel flex space-x-4'>
                        <div className='w-12 h-12 md:w-16 md:h-16 border rounded-full flex items-center justify-center'>
                            <FaArrowLeftLong className='FaArrowLeftLong' />
                        </div>
                        <div className='w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center'>
                            <FaArrowRight className='FaArrowRight' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
                    <div className='rounded-lg shadow-lg overflow-hidden'>
                        <img src={carousel1} alt='carouselimg' className='w-full' />
                        <div className='bg-white p-5'>
                            <h5 className='carousel-head'>Paradise Beach, <br />Bantayan Island<span className='rupees-carousel ms-20'>$550.16</span></h5>
                            <p className='p-carousel mt-5'>Rome, Italy</p>
                            <h5 className='star_carousel flex items-center mt-5'>4.8 <FaStar className='ml-2' /></h5>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-lg overflow-hidden'>
                        <img src={carousel2} alt='carouselimg' className='w-full' />
                        <div className='bg-white p-5'>
                            <h5 className='carousel-head'>Ocean with full of <br /> Colors<span className='rupees-carousel ms-20'>$20.99</span></h5>
                            <p className='p-carousel mt-5'>Maldives</p>
                            <h5 className='star_carousel flex items-center mt-5'>4.8 <FaStar className='ml-2' /></h5>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-lg overflow-hidden'>
                        <img src={carousel3} alt='carouselimg' className='w-full' />
                        <div className='bg-white p-5'>
                            <h5 className='carousel-head'>Mountain View,<br /> Above the cloud<span className='rupees-carousel ms-20'>$150.99</span></h5>
                            <p className='p-carousel mt-5'>China</p>
                            <h5 className='star_carousel flex items-center mt-5'>4.8 <FaStar className='ml-2' /></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopDestinations;
