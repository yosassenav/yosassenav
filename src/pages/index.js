import Image from "next/image";
import profilePic from "../../public/img/vanne-kodemia.jpg";
import ReactLogo from "../../public/img/logo-react.jpg";
import NodejsLogo from "../../public/img/nodejs.jpg";
import JSLogo from "../../public/img/JavaScript-logo.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="">
        {/**Home Section*/}
        <div className="flex my-10 mx-12 justify-center">
          <div>
            <Image
              src={profilePic}
              alt="Vanne"
              width={150}
              height={150}
              className="rounded"
            />
          </div>
          <div className="my-4 mx-4">
            <h3 className="py-2">Welcome! My name is Vanessa</h3>
            <p>IT Specialist | Web developer Jr</p>
          </div>
        </div>
        {/**About Section*/}
        <div className="my-10 mx-14 text-center">
          I was born and raised in Cancun Mexico. I started this journey back in
          2016 when I was a student, right now I am currently working in the
          hospitality industry as an Identity and access management analyst, I'd
          love to expand my knowledge in the IT industry by assuming roles that
          allow me to challenge myself and learn new things!
        </div>
        {/**Technologies */}
        <div className="flex justify-center">
          <h3>These are some of the techologies I've worked with:</h3>
          <div className="grid-rows-3">
            <div>
              <Image src={NodejsLogo} width={150} height={150} />
            </div>
            <div>
              {" "}
              <Image src={ReactLogo} width={150} height={200} />
            </div>
            <div>
              {" "}
              <Image src={JSLogo} width={150} height={100} />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
