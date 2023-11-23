import React from 'react'
// images
import Logo from '../assets/logo.svg';
// link
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href='#' className='flex flex-col text-[30px] leading-none font-extrabold font-system'>
            {/* <img src={Logo} alt='logo'/> */}
            <span className='text-gradient font-system font-extrabold'>UMER</span> 
            SHEHZAD
          </a>
          {/* button */}
          <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
            >
              <button className='btn btn-sm'>
                work with me
              </button>
            </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
