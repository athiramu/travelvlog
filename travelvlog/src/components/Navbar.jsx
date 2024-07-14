import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/Vectorlogo.png';
import menu from '../images/menu.png'
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className='sticky top-0 z-[20] flex w-full h-[113px] items-center justify-between py-5 bg-white'>
                <div className='md:hidden w-full'>
                    <button onClick={toggleNavar}>
                        {isOpen ? 'X' : <img src={menu} alt='menu' />}
                    </button>
                </div>

                <div className='flex items-center'>
                    <img src={logo} alt='logo' className='h-12 w-12' />
                    <h1 className='ml-2 text-xl font-bold'>Travlog</h1>
                </div>
             
                <nav className='hidden md:flex justify-center space-x-5 w-full gap-x-[64px]'>
                    <NavLink to='/' className='nav-link-home'>
                        Home
                    </NavLink>
                    <NavLink to='/discover' className='nav-link'>
                        Discover
                    </NavLink>
                    <NavLink to='/deals' className='nav-link'>
                        Special Deals
                    </NavLink>
                    <NavLink to='/contact' className='nav-link'>
                        Contact
                    </NavLink>
                </nav>
               
                <div className='hidden md:flex'>
                    <Link to='/login' className='px-4 login mt-2'>Login</Link>
                    <button className='btn px-5 py-2 rounded-full'>SignUp</button>
                </div>
            </header>
            
            {isOpen && (
                <div className='flex flex-col md:hidden'>
                    <nav className='flex flex-col items-center space-y-5 w-full'>
                        <NavLink to='/' className='nav-link-home' onClick={toggleNavar}>
                            Home
                        </NavLink>
                        <NavLink to='/discover' className='nav-link' onClick={toggleNavar}>
                            Discover
                        </NavLink>
                        <NavLink to='/deals' className='nav-link' onClick={toggleNavar}>
                            Special Deals
                        </NavLink>
                        <NavLink to='/contact' className='nav-link' onClick={toggleNavar}>
                            Contact
                        </NavLink>
                    </nav>
                    <Link to='/login' className=' px-5 py-2 rounded-full login text-center' onClick={toggleNavar}>Login</Link>
                    <button className='btn px-5 py-2 rounded-full'>SignUp</button>
                </div>
            )}
        </>
    );
}

export default Navbar;
