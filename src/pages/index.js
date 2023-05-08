import Image from "next/image";
import profilePic from "../../public/img/vanne-kodemia.jpg";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Techstack from "@/components/Techstack/Techstack";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <title>Vanessa Martinez Romero</title>
      <Header />
      <div className="">
        {/**Home Section*/}
        <div className="flex my-14 mx-12">
          {/**About Section*/}
          <div className="my-20 mx-10">
            <h2 className="text-2xl">Welcome! My name is Vanessa</h2>
            <p className="text-base mb-10">IT Specialist | Web developer Jr</p>I
            was born and raised in Cancun Mexico. I started this journey back in
            2016 when I was a student, right now I am currently working in the
            hospitality industry as an Identity and access management analyst,
            I&apos;d love to expand my knowledge in the IT industry by assuming
            roles that allow me to challenge myself and learn new things!
          </div>
          <Image
            src={profilePic}
            alt="Vanne"
            className="mr-20 rounded w-32 h-80 sm:w-36 md:w-44 lg:w-48 xl:w-72"
          />
        </div>

        {/**Technologies */}
        <Techstack />
        {/**Projects */}
        <div className="my-12 mx-4 justify-center text-center">
          <h2 className="text-lg my-4">Projects I&apos;ve worked in</h2>
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}
