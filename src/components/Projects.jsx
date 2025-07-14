import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";
import projeto4 from "../assets/projeto4.png";
import projeto5 from "../assets/projeto5.png";

const projects = [
  {
    title: "Flappy Bird",
    image: projeto1,
    description: "Jogo estilo Flappy Bird criado com JavaScript.",
    link: "https://eduardovernizzi.github.io/projeto-flappy-bird/",
  },
  {
    title: "Cadastro 360",
    image: projeto4,
    description: "Sistema completo de cadastro e gerenciamento.",
    link: "https://eduardovernizzi.github.io/projeto-cadastro360/",
  },
  {
    title: "To Do List",
    image: projeto2,
    description: "Aplicativo para gerenciamento de tarefas.",
    link: "https://eduardovernizzi.github.io/projeto-tipsKeeper/",
  },
  {
    title: "Mundo Mágico",
    image: projeto3,
    description: "Site temático inspirado em Harry Potter.",
    link: "https://eduardovernizzi.github.io/projeto-harry/",
  },
  {
    title: "Calculadora",
    image: projeto5,
    description: "Calculadora funcional feita em JavaScript.",
    link: "https://eduardovernizzi.github.io/projeto-calculadora/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projetos</h2>

      <div
        id="projectsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
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
