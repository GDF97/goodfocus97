"use client";

import Container from "@/components/Container";
import Filter from "@/components/Filter";
import NavigationBar from "@/components/NavigationBar";
import PhotoCard from "@/components/PhotoCard";
import React, { useEffect, useState } from "react";
import DATA from "./data.json";

export default function Gallery() {
  const [selectedTag, setTag] = useState("All Photos");
  const [pictures, setPictures] = useState(DATA);
  const [selectedPicutre, setSelectedPicture] = useState("");
  const [originalOffsetTop, setOriginalOffsetTop] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);

  function handleTag(tag) {
    setTag(tag);
  }

  function handleSelectedPicture(src, originalOffsetTopPosition) {
    setSelectedPicture(src);
    window.scrollTo({
      top: originalOffsetTop,
      behavior: "smooth",
    });
    setOriginalOffsetTop(originalOffsetTopPosition);
  }

  // function handleFilteredImages(tag) {
  //   let myNewArr = [[], [], [], []];
  //   let doesItHaveImageWithThatTag = false;
  //   for (let j = 0; j < pictures.length; j++) {
  //     for (let k = 0; k < pictures[j].length; k++) {
  //       if (pictures[j][k].tags.includes(tag)) {
  //         myNewArr[j].push(pictures[j][k]);
  //       }
  //     }
  //   }

  //   if (
  //     myNewArr[0].length == 0 &&
  //     myNewArr[1].length == 0 &&
  //     myNewArr[2].length == 0 &&
  //     myNewArr[3].length == 0
  //   ) {
  //     setFilteredImages([]);
  //   } else {
  //     setFilteredImages(myNewArr);
  //   }
  // }

  // useEffect(() => {
  //   if (selectedTag == "All Photos") {
  //     setFilteredImages([]);

  //     return;
  //   } else {
  //     handleFilteredImages(selectedTag);
  //   }
  // }, [selectedTag]);

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
      {/* <section className="w-full p-2">
        <Filter selectedTag={selectedTag} setTag={handleTag} />
      </section>  */}
      <section className="w-full p-2 grid grid-cols-1 place-items-center items-start gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {/* {filteredImages.length == 0 && <p>Não há fotos com essa TAG</p>} */}
        {/* {selectedTag == "All Photos" ? (
          <>
            {pictures.map((section, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {section.map((photos, id) => (
                  <PhotoCard src={photos.img_path} key={id} />
                ))}
              </div>
            ))}
          </>
        ) : (
          <>
            {filteredImages.map((section, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {section.map((photos, id) => (
                  <PhotoCard src={photos.img_path} key={id} />
                ))}
              </div>
            ))}
          </>
        )} */}
        {pictures.map((section, index) => (
          <div className="flex flex-col gap-4" key={index}>
            {section.map((photos, id) => (
              <PhotoCard
                src={photos.img_path}
                key={id}
                fnSetSelectedPicture={handleSelectedPicture}
              />
            ))}
          </div>
        ))}
      </section>
      {selectedPicutre != "" && (
        <div className="w-full h-full bg-[#ffffffac] backdrop-blur-xl absolute top-0 right-0 px-2 pt-14 pb-8">
          <div className="w-full h-full relative">
            <div className="w-full h-fit sticky top-16 flex flex-col gap-4 justify-start items-center">
              <img
                src={selectedPicutre}
                alt=""
                className="w-full max-w-[725px] max-h-[725px] object-contain"
              />
              <button
                onClick={() => handleSelectedPicture("", 0)}
                className="w-full max-w-[325px] py-2 bg-zinc-800 text-white rounded-lg"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
