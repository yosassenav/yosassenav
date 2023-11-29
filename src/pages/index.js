import Image from "next/image";
import ProfilePic from "../../public/img/avatar.svg";
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
      <div className="mx-auto w-full sm:w-11/12 md:w-3/4 p-4">
        {/* Home Section */}
        <WelcomeBanner />
        <div className="flex flex-col lg:flex-row my-4 lg:my-14">
          {/* About Section */}
          <Image
            src={ProfilePic}
            alt="Vanne"
            className="mx-auto my-3 lg:mx-10 lg:my-3 rounded"
            width={200} // Adjust the width based on your design
            height={200} // Adjust the height based on your design
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
        <br/>
        <br/>
        {/* Technologies */}
        <Techstack />
        <br/>
        <br/>
        {/* Projects */}
        <h2 className="text-center lg:text-left text-3xl my-4 lg:my-12">
          Projects:
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-evenly text-center">
          <ProjectCard title="Cacalli" description="ksjkjdsnckjdsnksd" />
          <ProjectCard
            title="P1"
            description="scbkjdsnckjdsnckdsnckdsnckjdsncjds"
          />
          <ProjectCard title="P2" description="nkndlcpokpksapoksa" />
        </div>
      </div>
      <Footer />
    </>
  );
}

