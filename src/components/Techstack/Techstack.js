import Image from "next/image";
import ReactLogo from "../../../public/img/react_logo.jpg";
import JSLogo from "../../../public/img/js_logo.png";
import MongoDBLogo from "../../../public/img/mongodb_logo.jpg";
import NodejsLogo from "../../../public/img/node_logo.jpg";
import ExpressLogo from "../../../public/img/expressjs_logo.jpg";
export default function Techstack() {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="my-4 text-center">
          These are some of the techologies I&apos;ve worked with
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-2 mx-6">
        <div className="flex flex-col items-center bg-stone-900 rounded">
          <div className="flex justify-center w-32 p-3">
            <Image src={NodejsLogo} alt="" />
          </div>
          <div className="flex justify-center p-3">
            <span>Node JS</span>
          </div>
        </div>
        <div className="flex flex-col items-center bg-stone-900 rounded">
          <div className="flex justify-center w-32 p-3">
            <Image src={ReactLogo} alt="" />
          </div>
          <div className="flex justify-center p-3">
            <span>React JS</span>
          </div>
        </div>
        <div className="flex flex-col items-center bg-stone-900 rounded">
          <div className="flex justify-center w-32 p-3">
            <Image src={JSLogo} alt="" />
          </div>
          <div className="flex justify-center p-3">
            <span>Javascript</span>
          </div>
        </div>
        <div className="flex flex-col items-center bg-stone-900 rounded">
          <div className="flex justify-center w-32 p-3">
            <Image src={ExpressLogo} alt="" />
          </div>
          <div className="flex justify-center p-3">
            <span>Express JS</span>
          </div>
        </div>
        <div className="flex flex-col items-center bg-stone-900 rounded">
          <div className="flex justify-center w-32 p-3">
            <Image src={MongoDBLogo} alt="" />
          </div>
          <div className="flex justify-center p-3">
            <span>Mongo DB</span>
          </div>
        </div>
      </div>
    </>
  );
}
