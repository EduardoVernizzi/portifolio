import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Cta() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Carlos Eduardo Vernizzi</h1>
        <h2>
          <Typewriter
            options={{
              strings: ["Desenvolvedor Fullstack", "Apaixonado por Tecnologia", "Focado em Resultados"],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </h2>

        <div className="hero-buttons">
          <a href="/curriculo.pdf" download className="btn-hero">
            Baixar Currículo
          </a>
          <div className="hero-icons">
            <a href="mailto:eduardo@email.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://github.com/EduardoVernizzi" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-vernizzi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;