import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  return (
    <>
      <header className="flex flex-row-reverse">
        <ul className="flex flex-row">
          <li className="my-6 mx-8 basis-12">
            <span
              className="
    bg-gradient-to-r from-sky-700 to-sky-900
    bg-no-repeat [background-position:0_88%]
    [background-size:100%_0.2em]
    motion-safe:transition-all motion-safe:duration-200
    py-3
    rounded
    hover:[background-size:100%_100%]
    focus:[background-size:100%_100%]"
            >
              Home
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className="
    bg-gradient-to-r from-sky-700 to-sky-900
    bg-no-repeat [background-position:0_88%]
    [background-size:100%_0.2em]
    motion-safe:transition-all motion-safe:duration-200
    py-3
    rounded
    hover:[background-size:100%_100%]
    focus:[background-size:100%_100%]"
            >
              About
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className="
    bg-gradient-to-r from-sky-700 to-sky-900
    bg-no-repeat [background-position:0_88%]
    [background-size:100%_0.2em]
    motion-safe:transition-all motion-safe:duration-200
    py-3
    rounded
    hover:[background-size:100%_100%]
    focus:[background-size:100%_100%]"
            >
              Technologies
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className="
    bg-gradient-to-r from-sky-700 to-sky-900
    bg-no-repeat [background-position:0_88%]
    [background-size:100%_0.2em]
    motion-safe:transition-all motion-safe:duration-200
    py-3
    rounded
    hover:[background-size:100%_100%]
    focus:[background-size:100%_100%]"
            >
              Projects
            </span>
          </li>
          <li className="my-6 mx-8 basis-12">
            <span
              className="
    bg-gradient-to-r from-sky-700 to-sky-900
    bg-no-repeat [background-position:0_88%]
    [background-size:100%_0.2em]
    motion-safe:transition-all motion-safe:duration-200
    py-3
    rounded
    hover:[background-size:100%_100%]
    focus:[background-size:100%_100%]"
            >
              Contact
            </span>
          </li>
        </ul>
      </header>
      <MobileMenu />
    </>
  );
}
