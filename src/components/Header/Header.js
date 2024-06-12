import React, { useState, useEffect } from 'react';
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header({ scrollToSection }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      {isSmallScreen ? (
        <MobileMenu 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          scrollToSection={scrollToSection}
          sections={{
            homeRef: 'Home',
            aboutRef: 'About',
            technologiesRef: 'Technologies',
            projectsRef: 'Projects',
            contactRef: 'Contact',
          }}
        />
      ) : (
        <header className="flex flex-row-reverse">
          <ul className='flex flex-row'>
            <li className="my-6 mx-8 basis-12">
              <button className='text-xl' onClick={() => scrollToSection('Home')}>
                Home
              </button>
            </li>
            <li className="my-6 mx-8 basis-12">
              <button className='text-xl' onClick={() => scrollToSection('About')}>
                About
              </button>
            </li>
            <li className="my-6 mx-8 basis-12">
              <button className='text-xl' onClick={() => scrollToSection('Technologies')}>
                Technologies
              </button>
            </li>
            <li className="my-6 mx-8 basis-12">
              <button className='text-xl' onClick={() => scrollToSection('Projects')}>
                Projects
              </button>
            </li>
            <li className="my-6 mx-8 basis-12">
              <button className='text-xl' onClick={() => scrollToSection('Contact')}>
                Contact
              </button>
            </li>
          </ul>
        </header>
      )}
    </>
  );
}
