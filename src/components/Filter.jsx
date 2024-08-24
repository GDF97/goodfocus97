"use client";

import React, { useState } from "react";
import all from "../assets/icons/all.png";
import buildings from "../assets/icons/buildings.png";
import car from "../assets/icons/car.png";
import film from "../assets/icons/film.png";
import mountains from "../assets/icons/mountains.png";
import nature from "../assets/icons/nature.png";
import people from "../assets/icons/people.png";
import portrait from "../assets/icons/portrait.png";
import Image from "next/image";

// Componente para dispositivos móveis
function FilterMobile({ selectedTag, setTag, open, setOpen, tags }) {
  return (
    <div className="w-full flex flex-col relative lg:hidden">
      <button
        className="w-full p-3 flex items-center justify-between gap-2 rounded-lg border-black shadow-[4px_4px_6px_0_#00000050]"
        onClick={() => setOpen(!open)}
      >
        {selectedTag}{" "}
        <p
          className={`transition-all duration-500 ease-in-out ${
            open ? "rotate-[450deg]" : "rotate-0"
          }`}
        >
          {">"}
        </p>
      </button>
      {open && (
        <div className="absolute w-full top-16 right-0 pb-4 h-fit flex flex-col rounded-lg overflow-hidden shadow-[3px_3px_6px_0_#00000050] lg:hidden">
          {tags.map((item, index) => (
            <button
              key={index}
              className="w-full p-3 flex items-center justify-start gap-2 border-b-2 border-black"
              value={item.tag}
              onClick={(e) => {
                setTag(e.target.value);
                setOpen(false);
              }}
            >
              <Image
                className="pointer-events-none"
                alt=""
                src={item.path}
                width={18}
                height={18}
              />
              {item.tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Componente para desktop
function FilterDesktop({ selectedTag, setTag, tags }) {
  return (
    <div className="w-full hidden lg:flex items-center justify-center gap-4">
      {tags.map((item, index) => (
        <button
          key={index}
          className={`w-36 flex flex-col items-center justify-center gap-2 border-b-2 p-2 ${
            selectedTag === item.tag ? "border-black" : "border-transparent"
          }`}
          value={item.tag}
          onClick={(e) => {
            setTag(e.target.value);
          }}
        >
          <Image
            alt=""
            src={item.path}
            width={25}
            height={25}
            className="pointer-events-none"
          />{" "}
          {item.tag}
        </button>
      ))}
    </div>
  );
}

// Componente principal
export default function Filter({ selectedTag, setTag }) {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([
    { tag: "All Photos", path: all },
    { tag: "Film", path: film },
    { tag: "Nature", path: nature },
    { tag: "Portrait", path: portrait },
    { tag: "People", path: people },
    { tag: "Buildings", path: buildings },
    { tag: "Landscape", path: mountains },
    { tag: "Cars", path: car },
  ]);

  return (
    <>
      <FilterMobile
        selectedTag={selectedTag}
        setTag={setTag}
        open={open}
        setOpen={setOpen}
        tags={tags}
      />
      <FilterDesktop selectedTag={selectedTag} setTag={setTag} tags={tags} />
    </>
  );
}
