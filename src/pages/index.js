// import ProfilePic from "../../public/img/avatar.svg";
import { useRef, useState } from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Techstack from "@/components/Techstack/Techstack";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import About from './About';
import { ToggleBtn } from '@/components/ToggleBtn/ToggleBtn';

export default function Home() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch(section){
      case 'Home':
        homeRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 'About':
        aboutRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 'Technologies':
        technologiesRef.current.scrollIntoView({behavior: 'smooth'})
        break;
      case 'Projects':
        projectsRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      case 'Contact':
        contactRef.current.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        break;
    }
  }

  return (
    <>
      <title>Vanessa Martinez Romero</title>
      <Header scrollToSection={scrollToSection} />
      

      <div className="mx-auto w-full sm:w-11/12 md:w-3/4 p-4">
        {/* Home Section */}
        <div ref={homeRef}>
          <WelcomeBanner/>
        </div>
        <br/>
        <br/>

        {/* Technologies */}
        <div ref={aboutRef}>
          <About/>
        </div>
        <br/>
        <br/>

        {/* Technologies */}
        <div ref={technologiesRef}>
          <Techstack/>
        </div>
        
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
      <div ref={contactRef}>
      <Footer/>
      </div>
    </>
  );
}

