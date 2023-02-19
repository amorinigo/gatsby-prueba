import { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaBars, FaTimes, FaAngleRight } from 'react-icons/fa';

const Navbar = () => {

    const [ openNavbar, setOpenNavbar ] = useState( false );

    return (
        <header 
            className='fixed top-0 left-0 w-full z-[999999] bg-transparent flex items-center justify-center select-none border-b border-solid border-[rgba(255,255,255,0.2)]'
        >

            <div className='flex items-center justify-between p-[20px] w-full max-w-[1000px] lg:justify-between'>

                <Link to='/' className='w-[123px] h-[32px] overflow-hidden md:w-auto md:h-auto'>
                    <StaticImage alt='logo' src='../../images/logo-dark.png' />
                </Link>
                
                <nav 
                    className={ `fixed top-0 left-0 z-[9999999] h-full ${ openNavbar ? 'block' : 'hidden' } md:block md:static bg-white w-[75%] max-w-[270px] overflow-hidden` }
                >
                    <ul className='flex flex-col md:flex-row md:gap-4'>
                        <li>
                            <Link 
                                className='py-3 px-[15px] w-full flex items-center justify-between border-b border-solid border-[#E9E9E9] transition hover:scale-[1.03]'
                                to='/'
                            >
                                <span>Home</span>
                                <FaAngleRight />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='py-3 px-[15px] w-full flex items-center justify-between border-b border-solid border-[#E9E9E9] transition hover:scale-[1.03]'
                                to='/about'
                            >
                                <span>About</span>
                                <FaAngleRight />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='py-3 px-[15px] w-full flex items-center justify-between border-b border-solid border-[#E9E9E9] transition hover:scale-[1.03]'
                                to='/contact'
                            >
                                <span>Contact</span>
                                <FaAngleRight />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='py-3 px-[15px] w-full flex items-center justify-between border-b border-solid border-[#E9E9E9] transition hover:scale-[1.03]'
                                to='/services'
                            >
                                <span>Services</span>
                                <FaAngleRight />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button 
                    type='button'
                    onClick={ () => setOpenNavbar(!openNavbar) }
                    className='flex items-center justify-center overflow-hidden text-2xl text-white hover:scale-[1.1] md:w-0 md:h-0 md:pointer-events-none'
                >
                    { openNavbar ? <FaTimes /> : <FaBars /> }
                </button>

            </div>

        </header>
    );

};

export default Navbar;
