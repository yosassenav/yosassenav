
import { FaTimes } from "react-icons/fa";


export default function MobileMenu({isMenuOpen, toggleMenu, scrollToSection, sections}) {
  

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-200 flex flex-col items-start md:hidden w-full mx-auto px-6 py-8 z-30">
        {/** bg-slate-300*/}
        <div className="place-self-end">
          <button onClick={toggleMenu}>
            <FaTimes aria-label="Close Menu"/>
          </button>
        </div>
        <ul>
          <li className="text-xl py-1">
            <button className='hover:text-indigo-600 transition duration-300' onClick={() => scrollToSection(sections.homeRef)}>
              Home
            </button>
          </li>
          <li className="text-xl py-1">
            <button className='hover:text-indigo-600 transition duration-300' onClick={() => scrollToSection(sections.aboutRef)}>
              About
            </button>
          </li>
          <li className="text-xl py-1">
            <button className='hover:text-indigo-600 transition duration-300' onClick={()=> scrollToSection(sections.technologiesRef)}>
              Technologies
            </button>
          </li>
          <li className="text-xl py-1">
            <button className='hover:text-indigo-600 transition duration-300' onClick={()=>scrollToSection(sections.projectsRef)}>
              Projects
            </button>
          </li>
          <li className="text-xl py-1">
            <button className='hover:text-indigo-600 transition duration-300' onClick={()=>scrollToSection(sections.contactRef)}>
              Contacts
            </button>
          </li>
        </ul>
      </div>
      )}
    </>
  );
}
