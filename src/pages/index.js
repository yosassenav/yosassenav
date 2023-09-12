import Image from "next/image";
import ProfilePic from "../../public/img/avatar.svg"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Techstack from "@/components/Techstack/Techstack";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";

export default function Home() {
  return (
    <>
      <title>Vanessa Martinez Romero</title>
      <Header />
      <div className="">
        {/**Home Section*/}
        <WelcomeBanner/>
        <div className="flex flex-row justify-evenly my-14 mx-12">
          {/**About Section*/}
          <Image
            src={ProfilePic}
            alt="Vanne"
            className="mx-40 my-3 rounded"
           
          />
          <div className="mx-40 my-20">
          
            I was born and raised in Mexico. I started this journey back in
            2016 <br/> when I was a student, right now I am currently working in the
            hospitality <br/> industry as an Identity and access management analyst,
            I&apos;d love to expand <br/> my knowledge in the IT industry by assuming
            roles that allow me to <br/> challenge myself and learn new things!
          </div>
          
        </div>

        {/**Technologies */}
        <Techstack />
        {/**Projects */}
        <h2 className="flex justify-center text-2xl">Projects</h2>
        <div className="flex flex-row my-12 mx-4 justify-evenly text-center">
          <ProjectCard title="Cacalli" description="ksjkjdsnckjdsnksd"/>
          <ProjectCard title="P1" description="scbkjdsnckjdsnckdsnckdsnckjdsncjds"/>
          <ProjectCard title="P2" description="nkndlcpokpksapoksa"/>
        </div>
      </div>
      <Footer />
    </>
  );
}
