import Image from "next/image";

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
        <h2 className="text-xl text-center">
          Technologies I&apos;ve worked with:
        </h2>
      </div>
      <div className="h-4/5 w-full my-10">
        <div className="grid grid-cols-4 gap-x-4 gap-y-6 place-items-center">
            <Image src={AWSLogo} width={85} height={85} alt="AWS"/>
            <Image src={BootstrapLogo} width={85} height={85} alt="Bootstrap"/>
            <Image src={JSLogo} width={85} height={85} alt="JS"/>
            <Image src={CSSLogo} width={85} height={85} alt="CSS"/>
            <Image src={GitLogo} width={85} height={85} alt="Git"/>
            <Image src={HTMLogo} width={85} height={85} alt="HTML"/>
            <Image src={MongoDBLogo} width={85} height={85} alt="MongoDB"/>
            <Image src={NodeJSLogo} width={85} height={85} alt="NodeJS"/>
            <Image src={ReactjsLogo} width={85} height={85} alt="ReactJS"/>
            <Image src={SQLogo} width={85} height={85} alt="SQL"/>
            <Image src={NextjsLogo} width={85} height={85} alt="NextJS"/>
          </div>
      </div>
    </>
  );
}

