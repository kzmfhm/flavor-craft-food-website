"use client"
import Link from 'next/link';
import { useState } from 'react';
import openMenu from "../../public/svg/open.svg";
import './style.css'
import Image from 'next/image';


import Header from '../Layout/Header'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className={`w-full h-14 pt-[10px] bg-black-400 flex justify-between items-center md:px-4 ${showMobileMenu ? 'mt-[0px]' : ''}`}>
      <div className='top'><Header/></div> 
       <div className="text-3xl font-bold mt-[20px] sticky top-0">
      
      </div>
      <div className={`md:hidden text-yellow-700 ${showMobileMenu ? 'hidden' : 'ml-[0px]'}`}>
        <Link className="text-4xl menu-icons" href="#" onClick={toggleMobileMenu}>
        <Image src={openMenu} alt='open' className='open' width={30}></Image>
        
        </Link>
      </div>
      <ul
        className={`font-bold text-yellow-700 md:flex ${
          showMobileMenu ? 'grid' : 'hidden'
        } md:block`}
      >
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
          <Link href="/" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110  duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
           <Link href="#categorySection" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Categories
          </Link>
        </li>
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110  duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
          <Link href="#healthySection" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Hygiene
          </Link>
        </li>
        <li
          className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110  duration-300 ${
            showMobileMenu ? 'text-sm mr-[0px]' : ''
          }`}
        >
          <Link href="/contact" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;