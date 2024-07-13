import React from 'react';
import './section.css';
import { FaToolbox } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import img1 from '../images/1mg1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'

function Section1() {
    return (
        <div className='px-5 mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='mt-20'>
                    <div className='px-5 py-4 rounded-full bg-white w-48 flex items-center justify-center explore_text shadow-lg'>
                        Explore the world! <FaToolbox className='ml-1' />
                    </div>
                    <h1 className='text-lg font-semibold travel_text'>
                        Travel <span className='span_texttop'>top destination <br /></span> of the world
                    </h1>
                    <p className='p-section1'>
                        We always make our customer happy by <br /> providing<br />
                        as many choices as possible
                    </p>
                    <div className='flex space-x-4'>
                        <button className='btn px-5 py-2 rounded-full flex items-center'>
                            Get Started
                        </button>
                        <button className='btn_demo px-5 py-2 rounded-full flex items-center'>
                            <FaPlayCircle className='mr-2 playcircle' /> Watch demo
                        </button>
                    </div>
                </div>
                <div className='section2'>
                    <div className='section1_2'>
                        <div className='ml-auto'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <div className='p-4 mt-9 md:ms-5 rounded-md'>
                                        <img src={img1} alt="Image 1"/>
                                    </div>
                                    <div className='p-4 md:ms-5 rounded-md'>
                                        <img src={img3} alt="Image 3"/>
                                    </div>
                                </div>
                                <div className='p-4 rounded-md mt-32 md:mt-0'>
                                    <img src={img2} alt="Image 2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
