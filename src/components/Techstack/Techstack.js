import Card from "../Card/Card";
import Image from "next/image";
import LeftArrow from "../../../public/left-arrow.png";
import RightArrow from "../../../public/right-arrow.png";
import AWSLogo from "../../../public/img/aws-svgrepo-com.svg";
import BootstrapLogo from "../../../public/img/bootstrap-fill-svgrepo-com.svg";
import JSLogo from "../../../public/img/brand-js-svgrepo-com.svg";
import CSSLogo from "../../../public/img/css3-01-svgrepo-com.svg";
import GitLogo from "../../../public/img/git-icon-svgrepo-com.svg";
import HTMLogo from "../../../public/img/html5-01-svgrepo-com.svg";
import MongoDBLogo from "../../../public/img/mongodb-logo-svgrepo-com.svg";
import NodeJSLogo from "../../../public/img/nodejs02-svgrepo-com.svg";
import ReactjsLogo from "../../../public/img/react-svgrepo-com.svg";
import SQLogo from "../../../public/img/sql-file-format-svgrepo-com.svg";
import NextjsLogo from "../../../public/img/nextjs-fill-svgrepo-com.svg";





export default function Techstack() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-xl my-12 text-center">
          Techologies I&apos;ve worked with:
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-4 mx-6">
        <Card img={HTMLogo} title="HTML"/>
        <Card img={CSSLogo} title="CSS" />
        <Card img={JSLogo} title="Javascript" />
        <Card img={BootstrapLogo} title="Bootstrap" />

      </div>
      <div className="flex mx-24 my-6 justify-between">      
        <Image src={LeftArrow} title="" alt="left arrow" height={30} className="flex flex-row"/>
        <Image src={RightArrow} title="" alt="right arrow" height={30} className="flex flex-row"/>
      </div>
    </>
  );
}

/**
 * 
        <Card img={ReactLogo} title="ReactJS" />
        <Card img={NodejsLogo} title="NodeJS" />
        <Card img={ExpressLogo} title="ExpressJS" />
        <Card img={MongoDBLogo} title="MongoDB" />
        <Card img={JSLogo} title="Git" />
 */