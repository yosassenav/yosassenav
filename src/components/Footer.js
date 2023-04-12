import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex-none py-14">
      <div className="mb-6 grid grid-cols-1 justify-center">
        <ul className="flex flex-row justify-center">
          <li className="my-6 mx-8 block">
            <a href="https://www.linkedin.com/in/vanessa-mromero/">
              <FaLinkedin size="2em" />
            </a>
          </li>
          <li className="my-6 mx-8 block">
            <a href="https://github.com/yosassenav">
              <FaGithub size="2em" />
            </a>
          </li>
        </ul>
        <div className="flex justify-center">
          <span className="">Vanessa Martinez Romero &copy;</span>
        </div>
      </div>
    </footer>
  );
}
