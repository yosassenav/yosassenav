import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MobileMenu from "../MobileMenu/MobileMenu";


export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Function to check if the screen is small
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the width as needed
      // when the screen is small, open the mobile menu
      setIsMenuOpen(true);
    };

    // Initial check
    checkScreenSize();

    // Listen for window resize events to update the state
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  useEffect(()=>{
    console.log("isMenuOpen",isMenuOpen)
  },[isMenuOpen]);

  return (
    <>
    {isSmallScreen ? (
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      ) : (
    <header className="flex flex-row-reverse">
      <ul className='flex flex-row'>
        <li className="my-6 mx-8 basis-12">
          <Link href="#" className='text-xl hover:text-indigo-600 transition duration-300'>
            Home
          </Link>
        </li>
        <li className="my-6 mx-8 basis-12">
          <Link href="#" className='text-xl hover:text-indigo-600 transition duration-300'>
            About
          </Link>
        </li>
        <li className="my-6 mx-8 basis-12">
          <Link href="#" className='text-xl hover:text-indigo-600 transition duration-300'>
            Technologies
          </Link>
        </li>
        <li className="my-6 mx-8 basis-12">
          <Link href="#" className='text-xl hover:text-indigo-600 transition duration-300'>
            Projects
          </Link>
        </li>
        <li className="my-6 mx-8 basis-12">
          <Link href="#" className='text-xl hover:text-indigo-600 transition duration-300'>
            Contacts
          </Link>
        </li>
      </ul>
    </header>
      )}
      
    </>
  );
}
