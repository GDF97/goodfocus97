"use client";

import Container from "@/components/Container";
import Filter from "@/components/Filter";
import NavigationBar from "@/components/NavigationBar";
import PhotoCard from "@/components/PhotoCard";
import React, { useState } from "react";
import banner from "../../assets/pictures/banner.jpg";
import photoseven from "../../assets/pictures/gallery/photo7.jpg";
import DATA from "./data.json";

export default function Gallery() {
  const [selectedTag, setTag] = useState("All Photos");
  const [images, setImages] = useState(DATA);
  const [filteredImages, setFilteredImages] = useState([]);

  function handleTag(tag) {
    setTag(tag);
  }

  return (
    <Container>
      <section className="w-full h-96 bg-[url('../assets/pictures/banner.jpg')] bg-center bg-cover">
        <div className="w-full h-full relative flex justify-center items-center py-4 backdrop-blur-sm">
          <h1 className="absolute top-12 left-0 text-xl bg-white pl-8 py-2 pr-2 w-fit lg:text-2xl">
            GooodFocus97
          </h1>
          <h1 className="text-3xl lg:text-5xl text-white">Galeria</h1>
        </div>
      </section>
      <NavigationBar isGallery={true} />
      <section className="w-full p-2">
        <Filter selectedTag={selectedTag} setTag={handleTag} />
      </section>
      <section className="w-full p-2 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col gap-4">
          <PhotoCard src={photoseven} />
          <PhotoCard src={banner} />
        </div>
        <div className="flex flex-col gap-4">
          <PhotoCard src={banner} />
          <PhotoCard src={photoseven} />
        </div>
        <div className="flex flex-col gap-4">
          <PhotoCard src={photoseven} />
          <PhotoCard src={banner} />
        </div>
        <div className="flex flex-col gap-4">
          <PhotoCard src={banner} />
          <PhotoCard src={photoseven} />
        </div>
      </section>
    </Container>
  );
}
