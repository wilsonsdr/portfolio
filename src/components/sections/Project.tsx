import React from "react";
import Image from "next/image";
import { Title, Container } from "../elements";
import Carousel from "@/components/sections/project/slider/Carousel";

export default function Project() {
  return (
    <Container>
      <Title title="Projetos" />
      <Carousel />
      <Image
        className="fixed right-[400px] top-[70px] -z-50 max-xl:hidden"
        src="/img/cloud.svg"
        alt="cloud"
        width={100}
        height={100}
      />
      <Image
        className="fixed right-[300px] top-[10px] -z-50 max-xl:hidden"
        src="/img/cloud.svg"
        alt="cloud"
        width={100}
        height={100}
      />
      <Image
        className="fixed right-[220px] top-[10px] -z-50 animate-pulse max-lg:top-[90px] max-md:right-[10px] max-md:top-[40px] max-md:opacity-30"
        src="/img/star.svg"
        alt="star"
        width={70}
        height={70}
      />
      <Image
        className="fixed right-[250px] top-[50px] -z-50 animate-pulse max-lg:top-[150px] max-md:right-[40px] max-md:top-[100px] max-md:opacity-30"
        src="/img/star.svg"
        alt="star"
        width={50}
        height={50}
      />
      <Image
        className="fixed right-[100px] top-[40px] -z-50 animate-pulse max-lg:top-[130px] max-md:opacity-30"
        src="/img/star.svg"
        alt="star"
        width={50}
        height={50}
      />
      <Image
        className="fixed right-[150px] top-[60px] -z-50 max-lg:hidden"
        src="/img/spaceship.svg"
        alt="spaceship"
        width={100}
        height={100}
      />
      <Image
        className="fixed bottom-[-50px] right-[100px] max-md:opacity-30"
        src="/img/rocket.svg"
        alt="rocket"
        width={200}
        height={200}
      />
    </Container>
  );
}
