"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollUpImage from '../../../public/svg/scrollup.svg';
import './style.css'; 

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    const handleScroll = () => {
     
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 100);
    };


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const scrollToTop = () => {
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className='scroll-up' onClick={scrollToTop}>
          <Image src={ScrollUpImage} alt='Scroll Up' />
        </button>
      )}
    </div>
  );
};

export default ScrollUp;
