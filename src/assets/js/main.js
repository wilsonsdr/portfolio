import {en} from "./lang/en.js";
import {pt} from "./lang/pt.js";

let valor;

const selecionarIdioma = document.querySelector(".idioma-container").addEventListener("click", function() {
  
  const adicionarClasse = document.querySelector(".idioma-menu").classList.toggle("ativo");

  cabecalho();
  introducao();
  experiencia();
  formacao();
  projetos();
  rodape();
})

//#region validação de idiomas
const validarPt = document.querySelector(".pt").addEventListener("click", function() {
  
  let checarPt = document.querySelectorAll("input")[0].checked = true;
  
  valor = document.querySelectorAll("input")[0].value;

  checarPt = true ? document.querySelectorAll("input")[1].checked = false : console.log(valor);

  const mudarBoxSize = document.querySelector(".idioma-menu").style.width = "109px";
})

const validarEn = document.querySelector(".en").addEventListener("click", function() {
  let checarEn = document.querySelectorAll("input")[1].checked = true;
  
  valor = document.querySelectorAll("input")[1].value;

  checarEn = true ? document.querySelectorAll("input")[0].checked = false : console.log(valor);

  const mudarBoxSize = document.querySelector(".idioma-menu").style.width = "130px";
})
//#endregion

//#region cabecalho
const cabecalho = () => {
  
  const links = document.querySelector(".header-menu").querySelectorAll("li");

  if(valor == "en") {
   document.querySelector(".idioma-texto").innerHTML = en.cabecalho[4]
    for (let i = 0; i < links.length; i++) {
      links[i].innerHTML = `<a href="#${pt.id[i]}">${en.cabecalho[i]}</a>`;
    }
  } else {
    document.querySelector(".idioma-texto").innerHTML = pt.cabecalho[4]
    for (let i = 0; i < links.length; i++) {
      links[i].innerHTML = `<a href="#${pt.id[i]}">${pt.cabecalho[i]}</a>`;
    };
  }
}
//#endregion

//#region introducao
const introducao = () => {
 
  const mudarHeader = document.querySelector(".introducao").getElementsByTagName("div")[0];
  
  if (valor == "en") {
    mudarHeader.innerHTML = 
    `<h1>${en.introducao[0]}</h1>
     <p>${en.introducao[1]}</p>`;
  } else {
    mudarHeader.innerHTML = 
    `<h1>${pt.introducao[0]}</h1>
     <p>${pt.introducao[1]}</p>`;
  }
};
//#endregion

//#region experiencia
const experiencia = () => {
  
  if(valor == "en") {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[0].innerHTML = en.cabecalho[0];
    const experienciaTexto = 
    document.querySelector(".experiencia-texto").innerHTML = en.experiencia.sobre;
  } else {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[0].innerHTML = pt.cabecalho[0];
    const experienciaTexto = 
    document.querySelector(".experiencia-texto").innerHTML = pt.experiencia.sobre;
  }

    primeiraExperiencia()
    segundaExperiencia()
};

const primeiraExperiencia = () => {
  
  if (valor == "en") {
    const empresaAno =
    document.querySelector(".empresa-ano").innerHTML = en.experiencia.primeiraExperiencia.ano
    const empresaCargo = 
    document.querySelector(".empresa-cargo").innerHTML = en.experiencia.primeiraExperiencia.cargo
    const empresaTexto = 
    document.querySelector(".empresa-texto").querySelectorAll("li");

    for (let i = 0; i < empresaTexto.length; i++) {
      empresaTexto[i].innerHTML = `${en.experiencia.primeiraExperiencia.funcao[i]}`
   }
  
  } else {
    const empresaAno =
    document.querySelector(".empresa-ano").innerHTML = pt.experiencia.primeiraExperiencia.ano
    const empresaCargo = 
    document.querySelector(".empresa-cargo").innerHTML = pt.experiencia.primeiraExperiencia.cargo
    const empresaTexto = 
    document.querySelector(".empresa-texto").querySelectorAll("li");

    for (let i = 0; i < empresaTexto.length; i++) {
      empresaTexto[i].innerHTML = `${pt.experiencia.primeiraExperiencia.funcao[i]}`
    }
  }
}

const segundaExperiencia = () => {
    
  if(valor == "en") {
      const empresaAno =
      document.querySelectorAll(".empresa-ano")[1].innerHTML = en.experiencia.segundaExperiencia.ano
      const empresaCargo = 
      document.querySelectorAll(".empresa-cargo")[1].innerHTML = en.experiencia.segundaExperiencia.cargo
      const empresaTexto = 
      document.querySelectorAll(".empresa-texto")[1].querySelectorAll("li");
  
      for (let i = 0; i < empresaTexto.length; i++) {
        empresaTexto[i].innerHTML = `${en.experiencia.segundaExperiencia.funcao[i]}`
      }
  
    } else {
      const empresaAno =
      document.querySelectorAll(".empresa-ano")[1].innerHTML = pt.experiencia.segundaExperiencia.ano
      const empresaCargo = 
      document.querySelectorAll(".empresa-cargo")[1].innerHTML = pt.experiencia.segundaExperiencia.cargo
      const empresaTexto = 
      document.querySelectorAll(".empresa-texto")[1].querySelectorAll("li");
  
      for (let i = 0; i < empresaTexto.length; i++) {
        empresaTexto[i].innerHTML = `${pt.experiencia.segundaExperiencia.funcao[i]}`
      }
  }
}
//#endregion

//#region formacao
const formacao = () => {
 
  if(valor == "en") {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[1].innerHTML = `${en.cabecalho[1]}`
    const formacaoTexto =
    document.querySelector(".formacao-texto").innerHTML = `${en.formacao.formacaoTexto}`
    const faculdadeTipo = 
    document.querySelector(".faculdade-tipo").innerHTML = `${en.formacao.faculdade[0]}`
    const faculdadeCurso =
    document.querySelector(".faculdade-curso").innerHTML = `${en.formacao.faculdade[1]}`
    const cursos = document.querySelector(".cursos").innerHTML = "Intensive Courses";
  
  } else {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[1].innerHTML = `${pt.cabecalho[1]}`
    const formacaoTexto =
    document.querySelector(".formacao-texto").innerHTML = `${pt.formacao.formacaoTexto}`
    const faculdadeTipo = 
    document.querySelector(".faculdade-tipo").innerHTML = `${pt.formacao.faculdade[0]}`
    const faculdadeCurso =
    document.querySelector(".faculdade-curso").innerHTML = `${pt.formacao.faculdade[1]}`
    const cursos = document.querySelector(".cursos").innerHTML = "Cursos Intensivos";
  }
  habilidades();
  idiomas();
}

const habilidades = () => {
  
  if(valor == "en") {
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
  } else {
    const habilidades = 
    document.querySelector(".habilidades").innerHTML = pt.formacao.habilidades[0]
    const habilidadesLista = 
    document.querySelector(".habilidades-lista");
    habilidadesLista.innerHTML = 
    `
    <li>Front-End<span>HTML, CSS, SASS, JavaScript</span></li>
    <li>Back-End <span>NodeJS, Python</span></li>
    <li>${pt.formacao.habilidades[1]}<span>MySQL</span></li>
    <li>${pt.formacao.habilidades[2]}<span>${pt.formacao.habilidades[3]}, ${pt.formacao.habilidades[4]}, ${pt.formacao.habilidades[5]} </span></li>
    `
  }
}

const idiomas = () => {

  if(valor == "en") {
    const idiomas = document.querySelector(".idiomas").innerHTML = en.formacao.idiomas[0];
    const idiomasLista = document.querySelector(".idiomas-lista")
    idiomasLista.innerHTML = 
    `
    <li>${en.formacao.idiomas[1]}<span>${en.formacao.idiomas[2]}</span></li>
    <li>${en.formacao.idiomas[3]}<span>${en.formacao.idiomas[4]}</span></li>
    `
  } else {
    const idiomas = document.querySelector(".idiomas").innerHTML = pt.formacao.idiomas[0];
    const idiomasLista = document.querySelector(".idiomas-lista")
    idiomasLista.innerHTML = 
    `
    <li>${pt.formacao.idiomas[1]}<span>${pt.formacao.idiomas[2]}</span></li>
    <li>${pt.formacao.idiomas[3]}<span>${pt.formacao.idiomas[4]}</span></li>
    `
  }
}
//#endregion

//#region projetos
const projetos = () => {
  
  if (valor == "en") {
    const subtitulo = document.querySelectorAll(".subtitulo")[2].innerHTML = en.cabecalho[2];
    const descricaoProjeto = document.querySelectorAll(".descricao-projeto");
    const descricaoLink = document.querySelectorAll(".descricao-link");
  
    for(let i = 0; i < descricaoProjeto.length; i++) {
      descricaoProjeto[i].innerHTML = en.descricaoProjeto[i];
    }
  
    for(let i = 0; i < descricaoLink.length; i++) {
      descricaoLink[i].textContent = "See Project";
    }
  } else {
    const subtitulo = document.querySelectorAll(".subtitulo")[2].innerHTML = pt.cabecalho[2];
    const descricaoProjeto = document.querySelectorAll(".descricao-projeto");
    const descricaoLink = document.querySelectorAll(".descricao-link");
  
    for(let i = 0; i < descricaoProjeto.length; i++) {
      descricaoProjeto[i].innerHTML = pt.descricaoProjeto[i];
    }
  
    for(let i = 0; i < descricaoLink.length; i++) {
      descricaoLink[i].textContent = "Ver Projeto";
    }
  }
}
//#endregion

//#region rodape
const rodape = () => {
  
  if (valor == "en") {
    const footerTexto = document.querySelector(".footer-texto").innerHTML = en.rodape[0];
    const footerCopy = document.querySelector(".footer-copy").innerHTML = en.rodape[1];
  } else {
    const footerTexto = document.querySelector(".footer-texto").innerHTML = pt.rodape[0];
    const footerCopy = document.querySelector(".footer-copy").innerHTML = pt.rodape[1];
  }
 
}
//#endregion

//#region galeria slide
let contador = 0;
const slide = document.querySelector(".slide").addEventListener("click", function() {
  contador++

  const rotacionarSlide = document.querySelector(".slide").classList.toggle("ativo");
    
    let arr = [0, 1]
  
    for(let i = 0; i < arr.length; i++) {
      const projeto = document.querySelectorAll(".projeto")[i].style.marginTop = "-180px"
    }
  
    if(contador == 2) {
      contador = 0
      for(let i = 0; i < arr.length; i++) {
        const projeto = document.querySelectorAll(".projeto")[i].style.marginTop = "initial"
      }
    }
})
//#endregion