export default function PhotoCard({ src, fnSetSelectedPicture }) {
  return (
    <img
      src={src}
      alt=""
      className="w-full md:w-[325px] lg:w-[450px] object-cover"
      onClick={(e) => fnSetSelectedPicture(e.target.src, e.target.offsetTop)}
    />
  );
}
