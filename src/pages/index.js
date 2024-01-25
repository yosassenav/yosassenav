// import ProfilePic from "../../public/img/avatar.svg";
import { useRef } from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Techstack from "@/components/Techstack/Techstack";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import Circles from "@/components/Circles/Circles";

export default function Home() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <>
      <title>Vanessa Martinez Romero</title>
      <Header />
      <div className="mx-auto w-full sm:w-11/12 md:w-3/4 p-4 area" ref={homeRef}>
        <Circles/>
        {/* Home Section */}
        <WelcomeBanner ref={aboutRef}/>
        <br/>
        <br/>

        {/* Technologies */}
        <Techstack ref={technologiesRef}/>
       
        {/* Projects */}
        <br/>
        <br/>
        <h2 className="text-center lg:text-left text-3xl my-4 lg:my-12">
          Projects:
        </h2>
        <br/>
        <br/>
        <div className="flex flex-col lg:flex-row lg:justify-evenly text-center" ref={projectsRef}>
          <ProjectCard title="Cacalli" description="ksjkjdsnckjdsnksd" />
          <ProjectCard
            title="P1"
            description="scbkjdsnckjdsnckdsnckdsnckjdsncjds"
          />
          <ProjectCard title="P2" description="nkndlcpokpksapoksa" />
        </div>
      </div>
      <Footer ref={contactRef}/>
    </>
  );
}

