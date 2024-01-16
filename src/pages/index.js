// import ProfilePic from "../../public/img/avatar.svg";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Techstack from "@/components/Techstack/Techstack";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import Circles from "@/components/Circles/Circles";

export default function Home() {
  return (
    <>
      <title>Vanessa Martinez Romero</title>
      <Header />
      <div className="mx-auto w-full sm:w-11/12 md:w-3/4 p-4 area">
        <Circles/>
        {/* Home Section */}
        <WelcomeBanner />
       
        {/* Technologies */}
        <Techstack />
       
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

