//#region arrays
const en = {
  header: ["Experience", "Education", "Projects", "Contact"],
  introduction: ["Front End Developer & UX/UI Designer", "Located in São Paulo"],
  experience: {
    about:
      ["My name is Wilson, I'm an ambitious young man, looking to improve myself daily, developing small projects using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>. I aim to specialize and deepen my understanding in the <strong>Web Development</strong> area."],
    firstExperience: {
      year: ["October 2021 - Present"],
      job: ["Future Club Intern"],
      role: [
        "Storage Technical Bootcamp, exclusive content training for partner Ecosystem, learn to articulate and demonstrate the benefits of IBM storage solutions",
        "QQSU Project, aimed to work together with the IBM team and the Paypow Startup. Together we use Cognos Analytics to generate insights through the dashboard for the Food Court",
        "Stardust Project, aimed to develop a game and to entertain the IBM's Cloud Executive, with a maximum deadline of 3 weeks",
        "Deep Learning in the company's tools and services; IBM Cloud, IBM Z, LinuxONE, IBM Storage",
      ],
    },
    secondExperience: {
      year: ["May 2021 - July 2021"],
      job: ["Telecommunications Intern"],
      role: [
        "Network link monitoring and tracking",
        "Responsible for opening and closing calls",
        "Activation and withdrawal of hardware equipments at clients",
        "Network troubleshooting",
      ],
    },
  },
  education: {
    textEducation: [`<p class="formacao-texto">My most recent academic experience was the <strong>Associate's degree</strong>. In addition, I always keep up to date with intensive online courses.</p>`],
    college: ["Associate's degree", "System Analysis"],
    skills: ["Skills", "Database Management", "Extra", "Git Version Control", "S.O Linux","Agile Methodology"],
    languages: ["Languages", "English", "Advanced", "Spanish", "Basic"]
  },
  projectDescription: ["Landing Page with pizzeria design, but in reality it is an anonymous tip hotline <span>against domestic violence</span>", "Customized bike shop and insurance", "Guessing game, where the program <span>chooses a random number and</span>we try  to guess", "Currency, temperature and measurement converter", "Movie catalog, where the user can add <span>and remove movies</span>", "Super Trunfo game, which cards are <span>randomly drawn, and we will battle</span>against the program"],
  footer: [
    "I am available for new projects at the moment. Contact me so we can talk",
    "Copyright ©2022. Developed by Wilson Souto dos Reis",
  ]
};

const pt = {
  header: ["experiencia", "formacao", "projetos", "contato"],
};
//#endregion

//#region reset Dom
const resetarDom = document.body.innerHTML;
let contador = 0;
const reset = () =>
    contador % 2 == 0 ? (document.body.innerHTML = resetarDom) : console.log("mudando idioma");
//#endregion

function mudarIdioma() {
  contador++;
  header();
  introduction();
  experience();
  education();
  projects();
  footer();
  reset();
}

//#region header
const header = () => {
  const links = document.querySelector(".header-menu").querySelectorAll("li");
  for (let i = 0; i < links.length; i++) {
    links[i].innerHTML = `<a href="#${pt.header[i]}">${en.header[i]}</a>`;
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

//#region introduction
const introduction = () => {
  const mudarHeader = document.querySelector(".introducao").getElementsByTagName("div")[0];
  mudarHeader.innerHTML = 
    `<h1>${en.introduction[0]}</h1>
     <p>${en.introduction[1]}</p>`;
};
//#endregion

//#region experience
const experience = () => {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[0].innerHTML = en.header[0];
    const experienciaTexto = 
    document.querySelector(".experiencia-texto").innerHTML = en.experience.about;

    primeiraExperiencia()
    segundaExperiencia()
};

const primeiraExperiencia = () => {
    const empresaAno =
    document.querySelector(".empresa-ano").innerHTML = en.experience.firstExperience.year
    const empresaCargo = 
    document.querySelector(".empresa-cargo").innerHTML = en.experience.firstExperience.job
    const empresaTexto = 
    document.querySelector(".empresa-texto").querySelectorAll("li");

    for (let i = 0; i < empresaTexto.length; i++) {
      empresaTexto[i].innerHTML = `${en.experience.firstExperience.role[i]}`
  }
}

const segundaExperiencia = () => {
    document.querySelectorAll(".empresa-ano")[1].innerHTML = en.experience.secondExperience.year
    const empresaCargo = 
    document.querySelectorAll(".empresa-cargo")[1].innerHTML = en.experience.secondExperience.job
    const empresaTexto = 
    document.querySelectorAll(".empresa-texto")[1].querySelectorAll("li");

    for (let i = 0; i < empresaTexto.length; i++) {
      empresaTexto[i].innerHTML = `${en.experience.secondExperience.role[i]}`
  }
}
//#endregion

//#region education
const education = () => {
    const subtitulo = 
    document.querySelectorAll(".subtitulo")[1].innerHTML = `${en.header[1]}`
    const formacaoTexto =
    document.querySelector(".formacao-texto").innerHTML = `${en.education.textEducation}`
    const faculdadeTipo = 
    document.querySelector(".faculdade-tipo").innerHTML = `${en.education.college[0]}`
    const faculdadeCurso =
    document.querySelector(".faculdade-curso").innerHTML = `${en.education.college[1]}`

    habilidades()
    const cursos = document.querySelector(".cursos").innerHTML = "Intensive Courses";
    idiomas()
}

const habilidades = () => {
    const habilidades = 
    document.querySelector(".habilidades").innerHTML = en.education.skills[0]
    const habilidadesLista = 
    document.querySelector(".habilidades-lista");
    habilidadesLista.innerHTML = 
    `
    <li>Front-End<span>HTML, CSS, SASS, JavaScript</span></li>
    <li>Back-End <span>NodeJS, Python</span></li>
    <li>${en.education.skills[1]}<span>MySQL</span></li>
    <li>${en.education.skills[2]}<span>${en.education.skills[3]}, ${en.education.skills[4]}, ${en.education.skills[5]} </span></li>
    `
}

const idiomas = () => {
    const idiomas = document.querySelector(".idiomas").innerHTML = en.education.languages[0];
    const idiomasLista = document.querySelector(".idiomas-lista")
    idiomasLista.innerHTML = 
    `
    <li>${en.education.languages[1]}<span>${en.education.languages[2]}</span></li>
    <li>${en.education.languages[3]}<span>${en.education.languages[4]}</span></li>
    `
}
//#endregion

//#region projects
const projects = () => {
  const subtitulo = document.querySelectorAll(".subtitulo")[2].innerHTML = en.header[2];
  const descricaoProjeto = document.querySelectorAll(".descricao-projeto");
  const descricaoLink = document.querySelectorAll(".descricao-link");

  for(let i = 0; i < descricaoProjeto.length; i++) {
    descricaoProjeto[i].innerHTML = en.projectDescription[i];
  }

  for(let i = 0; i < descricaoLink.length; i++) {
    descricaoLink[i].textContent = "See Project";
  }
}
//#endregion

//#region footer
const footer = () => {
    const footerTexto = document.querySelector(".footer-texto").innerHTML = en.footer[0];
    const footerCopy = document.querySelector(".footer-copy").innerHTML = en.footer[1];
}
//#endregion