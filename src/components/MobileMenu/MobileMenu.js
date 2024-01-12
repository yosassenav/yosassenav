
import Link from 'next/link';
import { FaTimes } from "react-icons/fa";


export default function MobileMenu() {
  return (
    
    <div className="fixed inset-0 bg-slate-200 flex flex-col items-start md:hidden w-full mx-auto px-6 py-8 z-30">
      {/** bg-slate-300*/}
      <div className="place-self-end"><FaTimes /></div>
      <ul>
        <li className="text-xl py-1">
          <Link href="" className='hover:text-indigo-600 transition duration-300'>
            Home
          </Link>
        </li>
        <li className="text-xl py-1">
          <Link href="" className='hover:text-indigo-600 transition duration-300'>
            About
          </Link>
        </li>
        <li className="text-xl py-1">
          <Link href="" className='hover:text-indigo-600 transition duration-300'>
            Technologies
          </Link>
        </li>
        <li className="text-xl py-1">
          <Link href="" className='hover:text-indigo-600 transition duration-300'>
            Projects
          </Link>
        </li>
        <li className="text-xl py-1">
          <Link href="" className='hover:text-indigo-600 transition duration-300'>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}
