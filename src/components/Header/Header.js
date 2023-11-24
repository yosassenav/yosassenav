import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
            <a className="text-xl hover:text-indigo-600 transition duration-300">
              Home
              <Link href="#"/>
            </a>
          </li>
          <li className="my-6 mx-8 basis-12">
            <a className="text-xl hover:text-indigo-600 transition duration-300">
              About
              <Link href="#"/>
            </a>
          </li>
          <li className="my-6 mx-8 basis-12">
            <a className="text-xl hover:text-indigo-600 transition duration-300">
              Technologies
              <Link href="#"/>
            </a>
          </li>
          <li className="my-6 mx-8 basis-12">
            <a className="text-xl hover:text-indigo-600 transition duration-300">
              Projects
              <Link href="#"/>
            </a>
          </li>
          <li className="my-6 mx-8 basis-12">
            <a className="text-xl hover:text-indigo-600 transition duration-300">
              Contact
              <Link href="#"/>
            </a>
          </li>
        </ul>
      </header>
      )}
      
    </>
  );
}
