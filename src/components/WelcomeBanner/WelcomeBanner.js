import { forwardRef } from 'react';
import Image from "next/image";
import ProfilePic from "../../../public/img/avatar.svg";
import About from '@/pages/About';

const WelcomeBanner = forwardRef((_, ref)=>{
  return(
    <div className="flex flex-col my-20 mx-12 justify-center text-center" ref={ref}>
      <p className="text-2xl my-3">Welcome!, my name is</p>
      <h1 className="text-5xl">Vanessa Romero</h1>
      <h3 className="text-2xl my-4 mb-10">IT Specialist | Web Developer</h3>
      <div className="flex flex-col lg:flex-row my-4 lg:my-14">
        {/* About Section */}
        <Image
          src={ProfilePic}
          alt="Vanne"
          className="mx-auto my-3 lg:mx-10 lg:my-3 rounded"
          width={200} 
          height={200} 
        />
        <div className="mx-auto my-4 text-xl lg:mx-4 lg:my-20 text-center lg:text-left">
         <About/>
        </div>
      </div>
    </div>
  )
})

WelcomeBanner.displayName = 'WelcomeBanner';
export default WelcomeBanner;
    
