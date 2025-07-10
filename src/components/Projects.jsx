import Marquee from "react-fast-marquee";
import React, { useState } from "react";

import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";
import projeto4 from "../assets/projeto4.png";
import projeto5 from "../assets/projeto5.png";

const projects = [

  { title: "Flappy Bird", image: projeto1, link: "https://eduardovernizzi.github.io/projeto-flappy-bird/" },
  { title: "Cadastro 360", image: projeto4, link: "https://eduardovernizzi.github.io/projeto-cadastro360/" },
  { title: "To Do List", image: projeto2, link: "https://eduardovernizzi.github.io/projeto-tipsKeeper/" },
  { title: "Mundo Mágico", image: projeto3, link: "https://eduardovernizzi.github.io/projeto-harry/" },
  { title: "Calculadora", image: projeto5, link: "https://eduardovernizzi.github.io/projeto-calculadora/" },
];

export default function Projects() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projetos</h2>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        pause={paused}
        className="marquee-container"
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            className="project-card"
            onClick={() => window.open(proj.link, "_blank")}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            onTouchCancel={() => setPaused(false)}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="project-image"
              draggable={false}
            />
            <h3 className="project-title">{proj.title}</h3>
            <button
              className="project-button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(proj.link, "_blank");
              }}
            >
              Ver Projeto
            </button>
          </div>
        ))}
      </Marquee>
    </section>
  );
}