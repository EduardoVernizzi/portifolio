import { StrictMode } from 'react';

import img1 from '../assets/img1.png'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image" data-aos="fade-up">
          <img src={img1} alt="Carlos Vernizzi" />
        </div>
        <div className="about-text" data-aos="fade-up">
          <h2>Quem sou eu?</h2>
          <p>
            Olá! Sou Carlos Eduardo Vernizzi, desenvolvedor Fullstack com 2 anos de experiência, focado em criar interfaces funcionais, responsivas e centradas no usuário. Participo de todo o ciclo do projeto, com atenção a boas práticas.
          </p>
          <p>
            Antes de me tornar desenvolvedor, atuei como engenheiro civil e policial militar. Hoje, quando não estou codando, gosto de estudar novas tecnologias e explorar design UX/UI para aprimorar ainda mais minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}


export default About;
