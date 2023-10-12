import Link from 'next/link';
import './style.css';


const Navbar = () => {
 return (

    <div className='flex gap-5 fixed-top mb-10 justify-center md:mt-[-55px] items-center md:ml-5 font-serif p-4'>
      <div className='navbar'>
      <Link href='/'>
        <div className='navbar-text'>
         Home
        </div>
      </Link>
      </div>
      <div className='navbar'>
    <Link href="#categorySection" >
        <div className='navbar-text'>
        Categories
        </div>
      </Link>
      </div>
      <div className='navbar'>
     <Link href="#healthySection">
        <div className='navbar-text'>
        Hygiene
        </div>
        </Link>
        </div>
        <div className='navbar'>
      <Link href="/contact">
        <div className='navbar-text'>
         Contact Us
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;