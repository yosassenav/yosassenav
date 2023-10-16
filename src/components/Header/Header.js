import React, { useState, useEffect } from 'react';
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen is small
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the width as needed
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
  return (
    <>
    {isSmallScreen ? (
        <MobileMenu />
      ) : (
        <header className="flex flex-row-reverse">
        <ul className="flex flex-row">
          <li className="my-6 mx-8 basis-12">
            <span
              className=""
            >
              Home
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className=""
            >
              About
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className=""
            >
              Technologies
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className=""
            >
              Projects
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className=""
            >
              Contact
            </span>
          </li>
        </ul>
      </header>
      )}
      
    </>
  );
}
