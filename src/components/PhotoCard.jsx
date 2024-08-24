import Image from "next/image";

export default function PhotoCard({ src }) {
  return (
    <Image
      src={src}
      alt=""
      className="w-full md:w-[325px] lg:w-[450px] object-cover"
    />
  );
}
