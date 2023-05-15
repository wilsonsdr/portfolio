import React from "react";
import Slider from "react-slick";
import ProjectViewer from "./projectViewer/ProjectViewer";
import { ShadowCard } from "@/components/elements";

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <ShadowCard>
      <Slider {...settings}>
        <ProjectViewer
          name="Pizzaria Donna"
          description="Landing Page com design de pizaria, mas na realidade é um canal de denúncia contra a violência doméstica"
          href="https://pizzaria-donna.vercel.app/"
          src="https://raw.githubusercontent.com/wilsonsdr/pizzaria-donna/main/public/img/banner-bg.webp"
          alt="pizza"
        ></ProjectViewer>
        <ProjectViewer
          name="Bikcraft"
          description="Loja de venda de bicicletas customizadas e seguros"
          href="https://wilsonsdr.github.io/bikcraft/"
          src="https://wilsonsdr.github.io/bikcraft/img/bicicletas/nimbus.jpg"
          alt="bike"
        ></ProjectViewer>
        <ProjectViewer
          name="The Mentalist"
          description=" Jogo de adivinhação, em que o programa escolhe um número
                aleatório e tentamos adivinhar"
          href="https://codepen.io/wilsonsdr/full/JjvKpOK"
          src="https://c4.wallpaperflare.com/wallpaper/386/339/776/brain-digital-art-artificial-intelligence-glowing-wallpaper-preview.jpg"
          alt="brain"
        ></ProjectViewer>
        <ProjectViewer
          name="Conversor"
          description="Conversor de moedas, temperaturas e medidas"
          href="https://codepen.io/wilsonsdr/full/PoeZxmw"
          src="https://images.unsplash.com/photo-1586974710160-55f48f417990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
          alt="coin"
        ></ProjectViewer>
        <ProjectViewer
          name="Super Trunfo"
          description="Jogo de Super Trunfo, em que as cartas serão sorteadas
                aleatoriamente, e batalhará contra o programa"
          href="https://codepen.io/wilsonsdr/full/qBYVbvE"
          src="https://4kwallpapers.com/images/wallpapers/monkey-d-luffy-one-piece-minimal-art-5k-8k-7680x4320-8211.png"
          alt="luffy"
        ></ProjectViewer>
      </Slider>
    </ShadowCard>
  );
}
