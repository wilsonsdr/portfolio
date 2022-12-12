import {en} from "./lang/en.js";
import {pt} from "./lang/pt.js";

const btnIdioma = document.querySelector(".mudar-idioma").addEventListener("click", mudarIdioma)
  function mudarIdioma() {
    cabecalho();
    introducao();
    experiencia();
    formacao();
    projetos();
    rodape();
  }

//#region cabecalho
const cabecalho = () => {
  const links = document.querySelector(".header-menu").querySelectorAll("li");
  for (let i = 0; i < links.length; i++) {
    links[i].innerHTML = `<a href="#${pt.id[i]}">${en.cabecalho[i]}</a>`;
  }
  mudarBandeira();
};

const mudarBandeira = () => {
  const mudarBandeira =
    (document.querySelector(".bandeira").src =
      "./src/assets/img/bandeira-brasil.png") &
    (document.querySelector(".idioma").textContent = "pt-BR");
};
//#endregion

//#region introducao
const introducao = () => {
  const mudarHeader = document.querySelector(".introducao").getElementsByTagName("div")[0];
  mudarHeader.innerHTML = 
    `<h1>${en.introducao[0]}</h1>
     <p>${en.introducao[1]}</p>`;
};
//#endregion

//#region experiencia
const experiencia = () => {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[0].innerHTML = en.cabecalho[0];
    const experienciaTexto = 
    document.querySelector(".experiencia-texto").innerHTML = en.experiencia.sobre;

    primeiraExperiencia()
    segundaExperiencia()
};

const primeiraExperiencia = () => {
    const empresaAno =
    document.querySelector(".empresa-ano").innerHTML = en.experiencia.primeiraExperiencia.ano
    const empresaCargo = 
    document.querySelector(".empresa-cargo").innerHTML = en.experiencia.primeiraExperiencia.cargo
    const empresaTexto = 
    document.querySelector(".empresa-texto").querySelectorAll("li");

    for (let i = 0; i < empresaTexto.length; i++) {
      empresaTexto[i].innerHTML = `${en.experiencia.primeiraExperiencia.funcao[i]}`
  }
}

const segundaExperiencia = () => {
    document.querySelectorAll(".empresa-ano")[1].innerHTML = en.experiencia.segundaExperiencia.ano
    const empresaCargo = 
    document.querySelectorAll(".empresa-cargo")[1].innerHTML = en.experiencia.segundaExperiencia.cargo
    const empresaTexto = 
    document.querySelectorAll(".empresa-texto")[1].querySelectorAll("li");

    for (let i = 0; i < empresaTexto.length; i++) {
      empresaTexto[i].innerHTML = `${en.experiencia.segundaExperiencia.funcao[i]}`
  }
}
//#endregion

//#region formacao
const formacao = () => {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[1].innerHTML = `${en.cabecalho[1]}`
    const formacaoTexto =
    document.querySelector(".formacao-texto").innerHTML = `${en.formacao.formacaoTexto}`
    const faculdadeTipo = 
    document.querySelector(".faculdade-tipo").innerHTML = `${en.formacao.faculdade[0]}`
    const faculdadeCurso =
    document.querySelector(".faculdade-curso").innerHTML = `${en.formacao.faculdade[1]}`

    habilidades()
    const cursos = document.querySelector(".cursos").innerHTML = "Intensive Courses";
    idiomas()
}

const habilidades = () => {
    const habilidades = 
    document.querySelector(".habilidades").innerHTML = en.formacao.habilidades[0]
    const habilidadesLista = 
    document.querySelector(".habilidades-lista");
    habilidadesLista.innerHTML = 
    `
    <li>Front-End<span>HTML, CSS, SASS, JavaScript</span></li>
    <li>Back-End <span>NodeJS, Python</span></li>
    <li>${en.formacao.habilidades[1]}<span>MySQL</span></li>
    <li>${en.formacao.habilidades[2]}<span>${en.formacao.habilidades[3]}, ${en.formacao.habilidades[4]}, ${en.formacao.habilidades[5]} </span></li>
    `
}

const idiomas = () => {
    const idiomas = document.querySelector(".idiomas").innerHTML = en.formacao.idiomas[0];
    const idiomasLista = document.querySelector(".idiomas-lista")
    idiomasLista.innerHTML = 
    `
    <li>${en.formacao.idiomas[1]}<span>${en.formacao.idiomas[2]}</span></li>
    <li>${en.formacao.idiomas[3]}<span>${en.formacao.idiomas[4]}</span></li>
    `
}
//#endregion

//#region projetos
const projetos = () => {
  const subtitulo = document.querySelectorAll(".subtitulo")[2].innerHTML = en.cabecalho[2];
  const descricaoProjeto = document.querySelectorAll(".descricao-projeto");
  const descricaoLink = document.querySelectorAll(".descricao-link");

  for(let i = 0; i < descricaoProjeto.length; i++) {
    descricaoProjeto[i].innerHTML = en.descricaoProjeto[i];
  }

  for(let i = 0; i < descricaoLink.length; i++) {
    descricaoLink[i].textContent = "See Project";
  }
}
//#endregion

//#region rodape
const rodape = () => {
    const footerTexto = document.querySelector(".footer-texto").innerHTML = en.rodape[0];
    const footerCopy = document.querySelector(".footer-copy").innerHTML = en.rodape[1];
}
//#endregion

let contadorArrow = 0;
const seta = document.querySelector(".arrow").addEventListener("click", arrow);
function arrow() {
  contadorArrow++
  const primeiroProjeto = document.querySelectorAll(".projeto")[0].style.marginTop = "-180px"
  const segundoProjeto = document.querySelectorAll(".projeto")[1].style.marginTop = "-180px"
  const rotacionarArrow = document.querySelector(".arrow").classList.toggle("ativo");

  if(contadorArrow % 2 == 0) {
    const primeiroProjeto = document.querySelectorAll(".projeto")[0].style.marginTop = "initial"
    const segundoProjeto = document.querySelectorAll(".projeto")[1].style.marginTop = "initial";
  }
}