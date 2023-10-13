"use client"
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className={`w-full h-14 pt-[10px] bg-black-400 flex justify-between items-center md:px-4 ${showMobileMenu ? 'rounded mt-[20px] ml-[280px] w-[100px] h-auto border border-gray-500' : ''}`}>
      <div className="text-3xl font-bold mt-[20px] sticky top-0"></div>
      <div className={`md:hidden text-yellow-700 ${showMobileMenu ? 'hidden' : 'ml-[0px]'}`}>
        <Link className="text-4xl menu-icons" href="#" onClick={toggleMobileMenu}>
          &#8801;
        </Link>
      </div>
      <ul className={`font-bold text-red-400 md:flex ${showMobileMenu ? 'flex-col' : 'hidden'} md:block`}>
        <li className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110  duration-300 ${showMobileMenu ? 'text-sm mt-[5px] mr-[10px]' : ''}`}>
          <Link href="/" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110  duration-300 ${showMobileMenu ? 'text-sm mt-[5px] mr-[10px]' : ''}`}>
          <Link href="#categorySection" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Categories
          </Link>
        </li>
        <li className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110  duration-300 ${showMobileMenu ? 'text-sm mt-[5px] mr-[10px]' : ''}`}>
          <Link href="#healthySection" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Hygiene
          </Link>
        </li>
        <li className={`mx-[20px] text-xl cursor-pointer transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300 ${showMobileMenu ? 'text-sm mt-[5px] mr-[10px]' : ''}`}>
          <Link href="/contact" className={`md:text-xl md:hover:text-white md:hover:-translate-y-1 md:hover:scale-110 ${showMobileMenu ? '' : ''}`} onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
