import Image from "next/image";

export default function Card({ img, title }) {
  return (
    <>
      <div className="flex flex-col items-center bg-stone-900 hover:bg-gradient-to-r from-sky-600 to-sky-900 rounded">
        <div className="flex justify-center p-3">
          <Image src={img} alt={title} />
        </div>
        <div className="flex justify-center p-3">
          <span>{title}</span>
        </div>
      </div>
    </>
  );
}
