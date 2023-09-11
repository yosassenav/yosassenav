import ReactLogo from "../../../public/img/react_logo.jpg";
import JSLogo from "../../../public/img/js_logo.png";
import MongoDBLogo from "../../../public/img/mongodb_logo.jpg";
import NodejsLogo from "../../../public/img/node_logo.jpg";
import ExpressLogo from "../../../public/img/expressjs_logo.jpg";
import Card from "../Card/Card";
import Image from "next/image";
import LeftArrow from "../../../public/left-arrow.png";
import RightArrow from "../../../public/right-arrow.png";


export default function Techstack() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-xl my-12 text-center">
          Techologies I&apos;ve worked with:
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-4 mx-6">
        <Card img={JSLogo} title="HTML" />
        <Card img={JSLogo} title="CSS" />
        <Card img={JSLogo} title="Javascript" />
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