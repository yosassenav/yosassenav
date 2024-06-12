import {useEffect} from 'react'
import { FaTimes } from "react-icons/fa";

export default function MobileMenu({ isMenuOpen, toggleMenu, scrollToSection, sections }) {

  useEffect(() => {
    console.log("MobileMenu isMenuOpen:", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-200 flex flex-col items-start md:hidden w-full mx-auto px-6 py-8 z-30">
          <div className="place-self-end">
            <button onClick={toggleMenu}>
              <FaTimes aria-label="Close Menu" />
            </button>
          </div>
          <ul>
            <li className="text-xl py-1">
              <button className='' onClick={() => scrollToSection(sections.homeRef)}>
                Home
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => scrollToSection('About')}>
                About
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => scrollToSection('Technologies')}>
                Technologies
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => scrollToSection('Projects')}>
                Projects
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => scrollToSection('Contact')}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
