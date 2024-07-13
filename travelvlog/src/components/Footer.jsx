import React from 'react';
import logo from '../images/Vectorlogo.png'
import facebook from '../images/Groupfacebook.png'
import twitter from '../images/Grouptwitter.png'
import insta from '../images/Group 8insta.png'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer  text-black py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Logo Section */}
        <div className='logo'>
        <div className='flex items-center '>
                    <img src={logo} alt='logo' className='h-12 w-12' />
                    <h1 className='ml-2 text-xl font-bold'>Travlog</h1>
                </div>
                <p className='text-gray-500 w-96 mt-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <div className='social-media mt-4 flex space-x-4'>
            <button className='social-button '>
              <img src={facebook} alt='Facebook' />
            </button>
            <button className='social-button'>
              <img src={twitter} alt='Twitter' />
            </button>
            <button className='social-button'>
              <img src={insta} alt='Instagram' />
            </button>
          </div>

        </div>
        </div>
<div className='flex justify-end'>
        <div className='company ms-40'>
          <h5 className='text-lg font-bold'>Company</h5>
          <ul className='mt-4 text-gray-500'>
            <li>About </li>
            <li>Career</li>
            <li>Mobile</li>
          </ul>
        </div>

      
        <div className='contact ms-20'>
          <h5 className='text-lg font-bold'>Contact</h5>
          <ul className='mt-4 text-gray-500'>
            <li>Why Travelling?</li>
            <li>Partner wuth us</li>
            <li>FAQ's</li>
            <li>Blog</li>
          </ul>
        </div>

      <div className='meet-us ms-20'>
          <h5 className='text-lg font-bold'>Meet Us</h5>
          <ul className='mt-4 text-gray-500'>
            <li>+00 92 1234 56789</li>
            <li>info@travlog.com</li>
            <li>205. R Street, New York</li>
            <li>BD23200</li>
          </ul>
        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
