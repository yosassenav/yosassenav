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
          These are some of the techologies I've worked with:
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 mx-6">
        <Image src={NodejsLogo} className="object-cover" />
        <Image src={ReactLogo} className="object-cover" />
        <Image src={JSLogo} className="object-cover" />
        <Image src={ExpressLogo} className="object-cover" />
        <Image src={MongoDBLogo} className="object-cover" />
      </div>
    </>
  );
}
