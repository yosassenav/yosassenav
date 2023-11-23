
import { FaTimes } from "react-icons/fa";
export default function MobileMenu() {
  return (
    
    <div className="fixed inset-0 bg-slate-200 flex flex-col items-start md:hidden w-full mx-auto px-6 py-8 z-30">
      {/** bg-slate-300*/}
      <div className="place-self-end"><FaTimes /></div>
      <ul>
        <li className="text-xl py-1">Home</li>
        <li className="text-xl py-1">About</li>
        <li className="text-xl py-1">Technologies</li>
        <li className="text-xl py-1">Projects</li>
        <li className="text-xl py-1">Contact</li>
      </ul>
    </div>
  );
}
