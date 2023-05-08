import ReactLogo from "../../../public/img/react_logo.jpg";
import JSLogo from "../../../public/img/js_logo.png";
import MongoDBLogo from "../../../public/img/mongodb_logo.jpg";
import NodejsLogo from "../../../public/img/node_logo.jpg";
import ExpressLogo from "../../../public/img/expressjs_logo.jpg";
import Card from "../Card/Card";
export default function Techstack() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-lg my-12 text-center">
          These are some of the techologies I&apos;ve worked with
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-6">
        <Card img={JSLogo} title="Javascript" />
        <Card img={ReactLogo} title="ReactJS" />
        <Card img={NodejsLogo} title="NodeJS" />
        <Card img={ExpressLogo} title="ExpressJS" />
        <Card img={MongoDBLogo} title="MongoDB" />
      </div>
    </>
  );
}
