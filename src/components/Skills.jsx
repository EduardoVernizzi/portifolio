import React from "react";

import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import bootstrapLogo from '../assets/bootstrap.png';
import gitLogo from '../assets/git.png';
import mySqlLogo from '../assets/mysql.png';
import nodeLogo from '../assets/node.png';
import csharp from '../assets/csharp.png';
import sassLogo from '../assets/sass.png';
import fireLogo from '../assets/firebase.png';
import expressLogo from '../assets/express.png'

const skills = [
  // Front-end
  {
    name: 'HTML5',
    image: htmlLogo,
    description: 'Estruturação semântica e acessível para web.'
  },
  {
    name: 'CSS3',
    image: cssLogo,
    description: 'Estilização responsiva com foco em usabilidade.'
  },
  {
    name: 'Sass',
    image: sassLogo,
    description: 'Pré-processador CSS que facilita a criação de estilos modulares, reutilizáveis e organizados, com recursos como variáveis, mixins e aninhamento.'
  },
  {
    name: 'Bootstrap',
    image: bootstrapLogo,
    description: 'Layouts rápidos e responsivos com grid e utilitários.'
  },
  {
    name: 'JavaScript',
    image: jsLogo,
    description: 'Lógica dinâmica e interatividade no front-end.'
  },
  {
    name: 'React',
    image: reactLogo,
    description: 'Componentização e construção de interfaces performáticas.'
  },

  // Back-end
  {
    name: 'Node',
    image: nodeLogo,
    description: 'Execução de código JavaScript no back-end com foco em performance e escalabilidade.'
  },
  {
    name: 'Express',
    image: expressLogo,
    description: 'Framework minimalista para Node.js que facilita a criação de APIs e aplicações web robustas, com roteamento simples e suporte a middlewares.'
  },
  {
    name: 'C#',
    image: csharp,
    description: 'Desenvolvimento de aplicações robustas e escaláveis com foco em back-end, utilizando conceitos de orientação a objetos.'
  },

  // Banco de dados
  {
    name: 'MySQL',
    image: mySqlLogo,
    description: 'Gerenciamento de dados relacionais com consultas eficientes em SQL.'
  },
  {
    name: 'Firebase',
    image: fireLogo,
    description: 'Plataforma da Google para desenvolvimento de aplicações web e mobile, oferecendo serviços como autenticação, banco de dados em tempo real, armazenamento, hosting e funções serverless.'
  },

  // Auxiliares
  {
    name: 'Git',
    image: gitLogo,
    description: 'Controle de versionamento de código.'
  }
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map(({ name, image, description }, index) => (
          <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
