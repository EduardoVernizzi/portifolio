import React from 'react';
import imgAbout from '../assets/img1.png'; // sua imagem

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">Sobre mim</h2>
      <div className="about-content">
        {/* Card grande à esquerda */}
        <div className="about-main-card">
          <img src={imgAbout} alt="Carlos Eduardo Vernizzi" className="about-img" />
          <div className="about-text">
            <p>
              Sou desenvolvedor Fullstack com 2 anos de experiência, especializado na criação de interfaces modernas, responsivas e com alta performance. Atuo com foco no front-end, utilizando tecnologias como HTML5, CSS3, SASS, Bootstrap, JavaScript e React para transformar ideias e mockups em aplicações intuitivas, funcionais e bem estruturadas.
            </p>
            <p>
              Tenho vivência em projetos completos, da concepção ao deploy, com domínio em consumo de APIs REST e integração com serviços como Firebase (Auth, Firestore e Hosting), garantindo aplicações conectadas, seguras e escaláveis. Trabalho em colaboração com equipes de design, back-end e produto para entregar soluções alinhadas às necessidades reais do negócio.
            </p>
            <p>
              Valorizo a escrita de código limpo, reutilizável e seguindo boas práticas, sempre com foco em usabilidade, performance e manutenibilidade. Além disso, possuo noções em C#, o que me permite compreender e colaborar com projetos back-end de forma mais integrada.
            </p>
          </div>
        </div>

        {/* Cards menores à direita */}
        <div className="about-cards">
          <div className="about-card">
            <h3>Especialização</h3>
            <p>Front-end focado em React, SASS e UI responsiva/performance. Back-end com C# e Node para APIs e integrações escaláveis.</p>
          </div>
          <div className="about-card">
            <h3>Paixão</h3>
            <p>Transformar ideias em produtos digitais que impactam positivamente a vida das pessoas.</p>
          </div>
          <div className="about-card">
            <h3>Metodologia</h3>
            <p>Desenvolvimento ágil, código limpo e colaboração próxima com equipes multidisciplinares.</p>
          </div>
          <div className="about-card">
            <h3>Localização</h3>
            <p>São Paulo, Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
