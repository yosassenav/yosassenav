import Image from "next/image";
import profilePic from "../../public/img/vanne-kodemia.jpg";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Inter } from "next/font/google";
import Techstack from "@/components/Techstack/Techstack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="">
        {/**Home Section*/}
        <div className="flex my-10 mx-12 justify-center">
          <div>
            <Image
              src={profilePic}
              alt="Vanne"
              width={250}
              height={250}
              className="rounded"
            />
          </div>
          <div className="my-4 mx-4">
            <h3 className="py-2">Welcome! My name is Vanessa</h3>
            <p className="no-underline hover:underline">
              IT Specialist | Web developer Jr
            </p>
          </div>
        </div>
        {/**About Section*/}
        <div className="my-10 mx-14 text-center">
          I was born and raised in Cancun Mexico. I started this journey back in
          2016 when I was a student, right now I am currently working in the
          hospitality industry as an Identity and access management analyst, I'd
          love to expand my knowledge in the IT industry by assuming roles that
          allow me to challenge myself and learn new things!
        </div>
        {/**Technologies */}
        <Techstack />
        {/**Projects */}
        <div className="my-4 mx-4">
          <h3>Projects I've worked in</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
