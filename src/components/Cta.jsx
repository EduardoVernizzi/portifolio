import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Carlos Eduardo Vernizzi</h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                "Desenvolvedor Fullstack",
                "Apaixonado por Tecnologia",
                "Focado em Resultados",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </h2>

        <div className="social-links">
          <a
            href="https://linkedin.com/in/carlosvernizzi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/EduardoVernizzi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/5511995906506"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="resume-download">
          <a href="/Curriculo.pdf" download className="resume-button">
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
