import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import bootstrapLogo from '../assets/bootstrap.png';
import gitLogo from '../assets/git.png';
import mySqlLogo from '../assets/mysql.png';
import nodeLogo from '../assets/node.png';




const skills = [
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
    name: 'JavaScript',
    image: jsLogo,
    description: 'Lógica dinâmica e interatividade no front-end.'
  },
  {
    name: 'React',
    image: reactLogo,
    description: 'Componentização e construção de interfaces performáticas.'
  },
  {
    name: 'Bootstrap',
    image: bootstrapLogo,
    description: 'Layouts rápidos e responsivos com grid e utilitários.'
  },
  {
    name: 'Git',
    image: gitLogo,
    description: 'Controle de versão com Git e GitHub.'
  },
  {
    name: 'MySQL',
    image: mySqlLogo,
    description: 'Gerenciamento de dados relacionais com consultas eficientes em SQL.'
  },
  {
    name: 'Node',
    image: nodeLogo,
    description: 'Execução de código JavaScript no back-end com foco em performance e escalabilidade.'
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 data-aos="fade-up">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" data-aos="fade-up" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-img" />
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;