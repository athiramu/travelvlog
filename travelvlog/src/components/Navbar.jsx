import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/Vectorlogo.png';
import menu from '../images/menu.png'
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className='sticky top-0 z-[20]  flex w-full  h-[113px] items-center justify-between py-5 bg-white'>
                <div className='md:hidden '>
                    <button onClick={toggleNavar}>
                        {isOpen ? 'X' : <img src={menu} />}
                    </button>
                </div>

                <div className='flex items-center '>
                    <img src={logo} alt='logo' className='h-12 w-12' />
                    <h1 className='ml-2 text-xl font-bold'>Travlog</h1>
                </div>
                <nav className=' hidden md:flex justify-center space-x-5 w-full gap-x-[64px] '>
                    <NavLink to='/' className='nav-link-home'  >
                        Home
                    </NavLink>
                    <NavLink to='/discover' className='nav-link' >
                        Discover
                    </NavLink>
                    <NavLink to='/deals' className='nav-link' >
                        Special Deals
                    </NavLink>
                    <NavLink to='/contact' className='nav-link' >
                        Contact
                    </NavLink>
                </nav>
                
                    <Link className='px-4 login'>Login</Link>
                    <button className='btn px-5 py-2 rounded-full'>SignUp</button>
                
            </header>
        </>
    );
}

export default Navbar;
