import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";
import React from "react";
import aboutpicture from "../assets/pictures/aboutpicture.jpg";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <section
        className={`w-full h-96 py-6 md:h-[475px] bg-[url('../assets/pictures/banner.jpg')] bg-center bg-cover `}
      >
        <p className="text-2xl bg-white pl-8 py-2 pr-2 w-fit">GoodFocus97</p>
      </section>
      <NavigationBar isGallery={false} />
      <section className="w-full h-fit p-4 flex flex-col gap-4 xl:flex-row xl:justify-around xl:h-[625px]">
        <div className="w-full h-full flex flex-col justify-between xl:w-[600px]">
          <h1 className="hidden text-2xl xl:flex text-center">
            “Capture a visão dos seus olhos e os sentimentos do seu coração.”
          </h1>
          <div className="w-full flex flex-col justify-between h-[375px] text-white bg-zinc-800 p-4 rounded-xl">
            <p className="text-justify">
              Olá, mundo! Eu sou Pedro Silva, um fotógrafo amador de Itariri,
              SP. Minha fotografia se concentra em capturar cenas que acho
              fascinantes, especialmente paisagens ensolaradas. Uso tanto a
              fotografia digital, com meu S20FE, quanto a analógica, com a
              Pentax K1000
            </p>
            <h1 className="text-2xl">Sobre mim</h1>
          </div>
        </div>
        <Image
          src={aboutpicture}
          alt=""
          className="w-full h-[375px] object-cover object-center xl:w-[700px] xl:h-full rounded-xl outline outline-1"
        />
      </section>
      <Footer />
    </Container>
  );
}
