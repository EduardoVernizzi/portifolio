import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import projeto1 from "../assets/flappy.png";
import projeto2 from "../assets/trattoria.png";
import projeto3 from "../assets/harry.png";
import projeto4 from "../assets/cadastro360.png";
import projeto5 from "../assets/taskManager.png";
import projeto6 from "../assets/MinimalAPI.png";

const projects = [
  {
    title: "Flappy Bird",
    image: projeto1,
    description: "Implementação de clone do clássico Flappy Bird utilizando JavaScript puro para lógica de jogo, eventos DOM e animações com requestAnimationFrame. HTML5 e CSS3 foram usados para estrutura e estilo responsivo.",
    link: "https://eduardovernizzi.github.io/projeto-flappy-bird/",
    github: "https://github.com/eduardovernizzi/projeto-flappy-bird",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" }
    ],
  },
  {
    title: "Cadastro 360",
    image: projeto4,
    description: "Sistema de cadastro e gerenciamento de usuários desenvolvido com React para interface dinâmica e Firebase como backend para autenticação, banco de dados em tempo real e hospedagem.",
    link: "https://eduardovernizzi.github.io/projeto-cadastro360/",
    github: "https://github.com/eduardovernizzi/projeto-cadastro360",
    tools: [
      { name: "React" },
      { name: "Firebase" },
      { name: "CSS3" },
      { name: "Bootstrap" }
    ],
  },
  {
    title: "Trattoria Vernizzi",
    image: projeto2,
    description: "Site responsivo para restaurante italiano, construído com React e Sass. Animações suaves foram implementadas usando GSAP e Framer Motion para uma experiência visual interativa e moderna.",
    link: "https://trattoria-vernizzi.vercel.app/",
    github: "https://github.com/EduardoVernizzi/projeto-trattoria-vernizzi",
    tools: [
      { name: "React" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "GSAP" },
      { name: "Framer Motion" },
      { name: "Sass" }
    ],
  },
  {
    title: "Mundo Mágico",
    image: projeto3,
    description: "Site temático com React e Bootstrap, focado em experiência visual inspirada em Harry Potter. Implementação inclui componentes reutilizáveis, estilização customizada e navegação responsiva.",
    link: "https://eduardovernizzi.github.io/projeto-harry/",
    github: "https://github.com/eduardovernizzi/projeto-harry",
    tools: [
      { name: "React" },
      { name: "CSS3" },
      { name: "Bootstrap" }
    ],
  },
  {
    title: "TaskManager",
    image: projeto5,
    description: "Aplicativo para gerenciamento de tarefas com React e Sass, consumo de APIs externas para previsão do tempo e geolocalização. Interface moderna e responsiva com estado gerenciado via hooks.",
    link: "https://vernizziTask.vercel.app/",
    github: "https://github.com/EduardoVernizzi/projeto-taskManager",
    tools: [
      { name: "React" },
      { name: "CSS3" },
      { name: "Sass" },
      { name: "API" }
    ],
  },
  {
    title: "Minimal API",
    image: projeto6,
    description: "Projeto de API minimalista em .NET 8 para gerenciamento de veículos, com autenticação JWT para administradores e documentação interativa via Swagger/OpenAPI.",
    link: "https://www.linkedin.com/posts/carlosvernizzi_dotnet-minimalapi-backend-activity-7371271966667919360-Iku5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRd-AIB9KFOGPJy4aCVBGwvxefj6KKuipM",
    github: "https://github.com/EduardoVernizzi/minimal-api",
    tools: [
      { name: ".NET" },
      { name: "C#" },
      { name: "Swagger" },
      { name: "EF Core" },
      { name: "MySql" },
      { name: "JWT" },
    ],
  },
];

export default function Projects() {

  return (
    <section id="projects" className="projects-section container">
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-content">
              <h5>{proj.title}</h5>
              <p>{proj.description}</p>
              <div className="tools">
                {proj.tools.map((tool, index) => (
                  <button key={index} type="button" disabled>
                    {tool.name}
                  </button>
                ))}
              </div>
              <div className="buttons">
                <button
                  className="btn-view"
                  onClick={() => window.open(proj.link, "_blank")}
                >
                  Ver Projeto
                </button>
                <button
                  className="btn-details"
                  onClick={() => window.open(proj.github, "_blank")}
                >
                  Código
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
