import React, { useState, useEffect, useRef } from 'react';
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

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(); // Close the menu after clicking on a button
  };


  return (
    <>
    {isSmallScreen ? (
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} scrollToSection={scrollToSection}
        sections={{
          Home: homeRef,
          About: aboutRef,
          Technologies: technologiesRef,
          Projects: projectsRef,
          Contacts: contactRef,
        }}
        />
      ) : (
    <header className="flex flex-row-reverse">
      <ul className='flex flex-row'>
        <li className="my-6 mx-8 basis-12">
          <button className='text-xl hover:text-indigo-600 hover:underline transition duration-300' onClick={()=>scrollToSection(homeRef)}>
            Home
          </button>
        </li>
        <li className="my-6 mx-8 basis-12">
          <button className='text-xl hover:text-indigo-600 hover:underline transition duration-300' onClick={()=>scrollToSection(aboutRef)}>
            About
          </button>
        </li>
        <li className="my-6 mx-8 basis-12">
          <button className='text-xl hover:text-indigo-600 hover:underline transition duration-300' onClick={()=>scrollToSection(technologiesRef)}>
            Technologies
          </button>
        </li>
        <li className="my-6 mx-8 basis-12">
          <button className='text-xl hover:text-indigo-600 hover:underline transition duration-300' onClick={()=>scrollToSection(projectsRef)}>
            Projects
          </button>
        </li>
        <li className="my-6 mx-8 basis-12">
          <button className='text-xl hover:text-indigo-600 hover:underline transition duration-300' onClick={()=>scrollToSection(contactRef)}>
            Contact
          </button>
        </li>
      </ul>
    </header>
      )}

    </>
  );
}
