import Image from "next/image";
import ProfilePic from "../../../public/img/avatar.svg";

export default function WelcomeBanner () {
    return (
    <div className="flex flex-col my-20 mx-12 justify-center text-center">
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
            I was born and raised in Mexico. I started this journey back in
            2016 when I was a student, right now I am currently working
            in the hospitality industry as an Identity and access
            management analyst. <br/><br/> I'd love to expand my knowledge in the IT
            industry by assuming roles that allow me to challenge myself
            and learn new things!
          </div>
        </div>
    </div>
    )
}