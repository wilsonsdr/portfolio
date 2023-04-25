import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col relative w-9/12 h-[270px] mt-4 p-4 bg-[#222] rounded-sm">
      <div className="absolute z-[-1] w-full h-full mt-2 bg-black rounded-sm"></div>
      <Slider {...settings}>
        <div className="relative">
          <div className="absolute opacity-0 top-0 left-0 w-full h-full hover:opacity-90 hover:bg-black transition-all duration-500">
            <div className="absolute flex flex-col gap-4 text-center left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 font-p">
              <h1 className="text-2xl max-md:text-3xl">Pizzaria Donna</h1>
              <span className="max-md:hidden">
                Landing Page com design de pizzaria, mas na realidade é um canal
                de denúncia contra a violência doméstica
              </span>
              <a
                className="p-2 bg-[#222] block rounded-full hover:bg-[#333] max-md:text-1xl"
                href="https://wilsonsdr.github.io/pizzaria-donna/"
                target="_blank"
              >
                Ver Projeto
              </a>
            </div>
          </div>
          <img
            className="object-cover w-full h-[235px]"
            width={235}
            height={235}
            src="https://wilsonsdr.github.io/pizzaria-donna/img/banner-bg.webp"
            alt="pizza"
          />
        </div>
        <div className="relative">
          <div className="absolute opacity-0 top-0 left-0 w-full h-full hover:opacity-90 hover:bg-black transition-all duration-500">
            <div className="absolute flex flex-col gap-4 text-center left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 font-p">
              <h1 className="text-2xl max-md:text-3xl">Bikcraft</h1>
              <span className="max-md:hidden">
                Loja de venda de bicicletas customizadas e seguros
              </span>
              <a
                className="p-2 bg-[#222] block rounded-full hover:bg-[#333] max-md:text-1xl"
                href="https://wilsonsdr.github.io/bikcraft/"
                target="_blank"
              >
                Ver Projeto
              </a>
            </div>
          </div>
          <img
            className="object-cover w-full h-[235px]"
            width={235}
            height={235}
            src="https://wilsonsdr.github.io/bikcraft/img/bicicletas/nimbus.jpg"
            alt="bike"
          />
        </div>
        <div className="relative">
          <div className="absolute opacity-0 top-0 left-0 w-full h-full hover:opacity-90 hover:bg-black transition-all duration-500">
            <div className="absolute flex flex-col gap-4 text-center left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 font-p">
              <h1 className="text-2xl max-md:text-3xl">The Mentalist</h1>
              <span className="max-md:hidden">
                Jogo de adivinhação, em que o programa escolhe um número
                aleatório e tentamos adivinhar
              </span>
              <a
                className="p-2 bg-[#222] block rounded-full hover:bg-[#333] max-md:text-1xl"
                href="https://codepen.io/wilsonsdr/full/JjvKpOK"
                target="_blank"
              >
                Ver Projeto
              </a>
            </div>
          </div>
          <img
            className="object-cover w-full h-[235px]"
            width={235}
            height={235}
            src="https://c4.wallpaperflare.com/wallpaper/386/339/776/brain-digital-art-artificial-intelligence-glowing-wallpaper-preview.jpg"
            alt="mind"
          />
        </div>
        <div className="relative">
          <div className="absolute opacity-0 top-0 left-0 w-full h-full hover:opacity-90 hover:bg-black transition-all duration-500">
            <div className="absolute flex flex-col gap-4 text-center left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 font-p">
              <h1 className="text-2xl max-md:text-3xl">Conversor</h1>
              <span className="max-md:hidden">
                Conversor de moedas, temperaturas e medidas
              </span>
              <a
                className="p-2 bg-[#222] block rounded-full hover:bg-[#333] max-md:text-1xl"
                href="https://codepen.io/wilsonsdr/full/PoeZxmw"
                target="_blank"
              >
                Ver Projeto
              </a>
            </div>
          </div>
          <img
            className="object-cover w-full h-[235px]"
            width={235}
            height={235}
            src="https://images.unsplash.com/photo-1586974710160-55f48f417990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
            alt="mind"
          />
        </div>
        <div className="relative">
          <div className="absolute opacity-0 top-0 left-0 w-full h-full hover:opacity-90 hover:bg-black transition-all duration-500">
            <div className="absolute flex flex-col gap-4 text-center left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 font-p">
              <h1 className="text-2xl max-md:text-3xl">Super Trunfo</h1>
              <span className="max-md:hidden">
                Jogo de Super Trunfo, em que as cartas serão sorteadas
                aleatoriamente, e batalhará contra o programa
              </span>
              <a
                className="p-2 bg-[#222] block rounded-full hover:bg-[#333] max-md:text-1xl"
                href="https://codepen.io/wilsonsdr/full/qBYVbvE"
                target="_blank"
              >
                Ver Projeto
              </a>
            </div>
          </div>
          <img
            className="object-cover w-full h-[235px]"
            width={235}
            height={235}
            src="https://4kwallpapers.com/images/wallpapers/monkey-d-luffy-one-piece-minimal-art-5k-8k-7680x4320-8211.png"
            alt="mind"
          />
        </div>
      </Slider>
    </div>
  );
}
