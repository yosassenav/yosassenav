
import Link from 'next/link';
import { FaTimes } from "react-icons/fa";
export default function MobileMenu() {
  return (
    
    <div className="fixed inset-0 bg-slate-200 flex flex-col items-start md:hidden w-full mx-auto px-6 py-8 z-30">
      {/** bg-slate-300*/}
      <div className="place-self-end"><FaTimes /></div>
      <ul>
        <li className="text-xl py-1">
          <a className='hover:text-indigo-600 transition duration-300'>
            Home
            <Link href=""/>
          </a>
        </li>
        <li className="text-xl py-1">
          <a className='hover:text-indigo-600 transition duration-300'>
            About
            <Link href=""/>
          </a>
        </li>
        <li className="text-xl py-1">
          <a className='hover:text-indigo-600 transition duration-300'>
            Technologies
            <Link href=""/>
          </a>
        </li>
        <li className="text-xl py-1">
          <a className='hover:text-indigo-600 transition duration-300'>
            Projects
            <Link href=""/>
          </a>
        </li>
        <li className="text-xl py-1">
          <a className='hover:text-indigo-600 transition duration-300'>
            Contacts
            <Link href=""/>
          </a>
        </li>
      </ul>
    </div>
  );
}
