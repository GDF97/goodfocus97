import Link from "next/link";
import React from "react";

export default function NavigationBar({ isGallery }) {
  return (
    <nav className="w-full flex justify-center p-4">
      <div className="w-fit flex items-center shadow-[4px_4px_4px_0_#00000050] rounded-3xl overflow-hidden">
        <Link
          href={"/"}
          className={`w-44 py-3 xl:w-60 rounded-3xl text-center m-0 ${
            !isGallery ? "bg-zinc-800 text-white" : ""
          }`}
        >
          Sobre Mim
        </Link>
        <Link
          href={"/gallery"}
          className={`w-44 py-3 xl:w-60 rounded-3xl text-center m-0 ${
            isGallery ? "bg-zinc-800 text-white" : ""
          }`}
        >
          Galeria
        </Link>
      </div>
    </nav>
  );
}
