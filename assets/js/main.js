let resetarDom = document.body.innerHTML;
let contador = 0;

const en = {
  header: ["Experience", "Education", "Projects", "Contact"],
  introduction: ["Front End Developer & UX/UI Designer", "Located in São Paulo"],
  experience: [
    "October 2021 - Present",
    "Future Club Intern",
    "May 2021- July 2021",
    "Telecommunications Intern",
    "Storage Technical Bootcamp, exclusive content training for partner Ecosystem, learn to articulate and demonstrate the benefits of IBM storage solutions",
    "QQSU Project, aimed to work together with the IBM team and the Paypow Startup. Together we use Cognos Analytics to generate insights through the dashboard for the Food Court",
    "Stardust Project, aimed to develop a game and to entertain the IBM's Cloud Executive, with a maximum deadline of 3   weeks",
    "Deep Learning in the company's tools and services; IBM Cloud, IBM Z, LinuxONE, IBM Storage",
    "Network link monitoring and tracking",
    "Responsible for opening and closing calls",
    "Activation and withdrawal of hardware equipments at clients",
    "Network troubleshooting",
  ],
  education:
    ["Associate's Degree", "System Analysis", "Skills", "Intensive Courses", "Languages", "Database Management", "Extra", "Git Version Control", "S.O Linux", "Agile Methodology"],
    footer: ["I am available for new projects at the moment. Contact me so we can talk", "Copyright ©2022. Developed by Wilson Souto dos Reis"],
};

function mudarIdioma() {
  contador++;

  header();
  introducao();
  experiencia();
  formacao();
  projetos();
  footer();

  if (contador % 2 == 0) {
    document.body.innerHTML = resetarDom;
  }
}

function header() {
  let header = document.querySelector(".header-menu").querySelectorAll("li");
  header[0].innerHTML = `<li><a href="#experiencia">${en.header[0]}</a></li>`;
  header[1].innerHTML = `<li><a href="#formacao">${en.header[1]}</a></li>`;
  header[2].innerHTML = `<li><a href="#projetos">${en.header[2]}</a></li>`;
  header[3].innerHTML = `<li><a href="#contato">${en.header[3]}</a></li>`;

  let mudarRegiao = (document.querySelector(".bandeira").src ="./assets/img/bandeira-brasil.png") & (document.querySelector(".idioma").textContent = "pt-BR");
}


function introducao() {
  let introducao = (document.querySelector(".introducao").querySelector("h1").textContent = en.introduction[0]) & (document.querySelector(".introducao").querySelector("p").textContent = en.introduction[1]);
}

function experiencia() {
  let experiencia = (document.querySelector(".experiencia").querySelector(".subtitulo").textContent = en.header[0]) & (document.querySelector(".experiencia").querySelector(".experiencia-texto").innerHTML = "My name is Wilson, I'm an ambitious young man, looking to improve myself daily, developing small projects using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>. I aim to specialize and deepen my understanding in the <strong>Web Development</strong> area.") & (document.querySelector(".experiencia").querySelectorAll("span")[1].textContent = en.experience[0]) & (document.querySelector(".experiencia").querySelectorAll("span")[2].textContent = en.experience[1]) 
  & (document.querySelector(".experiencia").querySelectorAll("span")[3].textContent = en.experience[2]) & (document.querySelector(".experiencia").querySelectorAll("span")[4].textContent = en.experience[3]) & (document.querySelector(".experiencia").querySelectorAll("li")[0].textContent = en.experience[4]) & (document.querySelector(".experiencia").querySelectorAll("li")[1].textContent = en.experience[5]) & (document.querySelector(".experiencia").querySelectorAll("li")[2].textContent = en.experience[6]) & (document.querySelector(".experiencia").querySelectorAll("li")[3].textContent = en.experience[7]) & (document.querySelector(".experiencia").querySelectorAll("li")[4].textContent = en.experience[8]) & (document.querySelector(".experiencia").querySelectorAll("li")[5].textContent = en.experience[9]) & (document.querySelector(".experiencia").querySelectorAll("li")[6].textContent = en.experience[10]) & (document.querySelector(".experiencia").querySelectorAll("li")[7].textContent = en.experience[11]);
}

function formacao() {
  let formacao = (document.querySelector(".formacao").querySelector(".subtitulo").textContent = en.header[1]) & (document.querySelector(".formacao").querySelector(".formacao-texto").innerHTML = `<p class="formacao-texto">My most recent academic experience was the <strong>Associate's degree</strong>. In addition, I always keep up to date with intensive online courses.</p>`) & (document.querySelector(".formacao").querySelector(".faculdade-tipo").textContent = en.education[0]) & (document.querySelector(".formacao").querySelector(".faculdade-curso").textContent = en.education[1]) & (document.querySelector(".formacao").querySelector(".habilidades").textContent = en.education[2]) & (document.querySelector(".formacao").querySelector(".cursos").textContent = en.education[3]) & (document.querySelector(".formacao").querySelector(".idiomas").textContent = en.education[4]) & (document.querySelector(".formacao-extra").querySelectorAll("ul")[0].innerHTML = `<li>Front-End<span>HTML, CSS, SASS, JavaScript</span></li>`) & (document.querySelector(".formacao-extra").querySelectorAll("ul")[0].innerHTML += ` <li>Back-End <span>NodeJS, Python</span></li>`) & (document.querySelector(".formacao-extra").querySelectorAll("ul")[0].innerHTML += ` <li>${en.education[5]} <span>MySQL</span></li>`) & (document.querySelector(".formacao-extra").querySelectorAll("ul")[0].innerHTML += ` <li>${en.education[6]} <span>${en.education[7]}, ${en.education[8]}, ${en.education[9]} </span></li>`) &  (document.querySelector(".formacao-extra").querySelectorAll("ul")[2].innerHTML = `<li>English<span>Advanced</span></li>`) & (document.querySelector(".formacao-extra").querySelectorAll("ul")[2].innerHTML += `<li>Spanish<span>Basic</span></li>`);
}

function projetos() {
  let projetos = document.querySelector(".projetos").querySelector(".subtitulo").textContent = en.header[2];
}

function footer() {
  let footer = (document.querySelector(".footer-texto").textContent = en.footer[0]) & (document.querySelector(".footer-copy").textContent = en.footer[1])
}