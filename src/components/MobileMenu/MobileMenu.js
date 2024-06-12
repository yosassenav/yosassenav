import { FaTimes } from "react-icons/fa";

export default function MobileMenu({isMenuOpen, toggleMenu, scrollToSection, sections}) {
  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-200 flex flex-col items-start md:hidden w-full mx-auto px-6 py-8 z-30">
          <div className="place-self-end">
            <button onClick={toggleMenu}>
              <FaTimes aria-label="Close Menu"/>
            </button>
          </div>
          <ul>
            <li className="text-xl py-1">
              <button className='' onClick={() => { scrollToSection(sections.homeRef); toggleMenu(); }}>
                Home
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => { scrollToSection(sections.aboutRef); toggleMenu(); }}>
                About
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => { scrollToSection(sections.technologiesRef); toggleMenu(); }}>
                Technologies
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => { scrollToSection(sections.projectsRef); toggleMenu(); }}>
                Projects
              </button>
            </li>
            <li className="text-xl py-1">
              <button className='' onClick={() => { scrollToSection(sections.contactRef); toggleMenu(); }}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
