import React from 'react'
// images
import Logo from '../assets/logo.svg';

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
          <button
          className='btn btn-sm'
          >work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header
