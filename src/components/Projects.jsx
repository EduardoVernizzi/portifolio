import React from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import projeto1 from "../assets/flappy.png";
import projeto2 from "../assets/trattoria.png";
import projeto3 from "../assets/harry.png";
import projeto4 from "../assets/cadastro360.png";
import projeto5 from "../assets/calculadora.png";

const projects = [
  {
    title: "Flappy Bird",
    image: projeto1,
    description: "Clone do jogo Flappy Bird criado com JavaScript",
    link: "https://eduardovernizzi.github.io/projeto-flappy-bird/",
    tools: [
      { name: "HTML5", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
      { name: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" }

    ],
    details: "Projeto desenvolvido com JavaScript puro, HTML5 e CSS3, simulando o clássico jogo Flappy Bird."
  },

  {
    title: "Cadastro 360",
    image: projeto4,
    description: "Sistema completo de cadastro e gerenciamento de pessoas",
    link: "https://eduardovernizzi.github.io/projeto-cadastro360/",
    tools: [
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      { name: "Firebase", logo: "https://cdn-icons-png.flaticon.com/512/906/906175.png" },
      { name: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "Bootstrap", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" }

    ],
    details: "Sistema desenvolvido em React com backend Firebase para cadastro e gerenciamento de pessoas."
  },
  {
    title: "Trattoria Vernizzi",
    image: projeto2,
    description: "Site profissional de um restaurante Italiano",
    link: "https://trattoria-vernizzi.vercel.app/",
    tools: [
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      { name: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "Bootstrap", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
      { name: "GSAP", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968371.png" },
      { name: "Framer Motion", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" }
    ],
    details: "Um site fictício com foco em criar um design elegante para um restaurante italiano."
  },
  {
    title: "Mundo Mágico",
    image: projeto3,
    description: "Site temático inspirado em Harry Potter",
    link: "https://eduardovernizzi.github.io/projeto-harry/",
    tools: [
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      { name: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "Bootstrap", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    ],
    details: "Site criado com React, CSS e Bootstrap para uma experiência visual temática e interativa."
  },
  {
    title: "Calculadora",
    image: projeto5,
    description: "Calculadora funcional feita em React",
    link: "https://eduardovernizzi.github.io/projeto-calculadora/",
    tools: [
      { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
      { name: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" }
    ],
    details: "Calculadora feita com React, com design responsivo e funcional."
  },
];

export default function Projects() {

  function showDetails(proj) {
    const logosHTML = proj.tools.map(tool =>
      `<img src="${tool.logo}" alt="${tool.name}" title="${tool.name}" style="height:36px; margin-right:8px; border-radius:6px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); background:#fff; padding:4px;">`
    ).join("");

    Swal.fire({
      title: proj.title,
      html: `
        <p style="font-size:1rem; text-align:left;">${proj.details}</p>
        <div style="margin-top:12px; display:flex; flex-wrap: wrap;">${logosHTML}</div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px',
      customClass: {
        popup: 'swal2-popup',
      }
    });
  }

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projetos</h2>

      <div
        id="projectsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
            >
              <img
                src={proj.image}
                className="d-block w-100"
                alt={proj.title}
                style={{ objectFit: "cover", maxHeight: "70vh" }}
              />
              <div className="carousel-caption">
                <h5>{proj.title}</h5>
                <p>{proj.description}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => window.open(proj.link, "_blank")}
                >
                  Ver Projeto
                </button>
                <button
                  className="btn btn-outline-light"
                  style={{ marginLeft: "10px" }}
                  onClick={() => showDetails(proj)}
                >
                  Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
}
