import Image from "next/image";

export default function Card({ img, title }) {
  return (
    <>
      <div className="flex flex-col items-center rounded w-40 h-40">
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
