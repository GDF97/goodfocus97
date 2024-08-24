import React from "react";

export default function Footer() {
  return (
    <footer className="w-full min-h-36 p-2 flex flex-col justify-center items-center gap-2">
      <p>&copy; 2024 Pedro Silva. All Rights Reserved.</p>
      <div className="flex gap-4 items-center">
        <a
          href="#"
          className="w-24 lg:w-32 py-2 bg-zinc-800 text-white text-center rounded-lg hover:bg-zinc-700"
        >
          Instagram
        </a>
        <a
          href="#"
          className="w-24 lg:w-32 py-2 bg-zinc-800 text-white text-center rounded-lg hover:bg-zinc-700"
        >
          Github
        </a>
        <a
          href="#"
          className="w-24 lg:w-32 py-2 bg-zinc-800 text-white text-center rounded-lg hover:bg-zinc-700"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}
