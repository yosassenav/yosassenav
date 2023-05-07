import Image from "next/image";

export default function Card({ props }) {
  const { img, title } = props;
  <>
    <div className="flex flex-col items-center bg-stone-900 hover:bg-gradient-to-r from-sky-600 to-sky-900 rounded">
      <div className="flex justify-center w-32 p-3">
        <Image src={img} alt="" />
      </div>
      <div className="flex justify-center p-3">
        <span>{title}</span>
      </div>
    </div>
  </>;
}
