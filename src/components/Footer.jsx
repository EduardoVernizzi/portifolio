import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <h3 className="footer__title">Carlos Eduardo Vernizzi Silva</h3>
          <p className="footer__description">
            Desenvolvedor Fullstack focado em entregar experiências digitais modernas, eficientes e escaláveis. Sempre buscando inovação e aprendizado contínuo.
          </p>

          <div className="links-footer" aria-label="Redes sociais">
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
        </div>

        <nav className="footer__nav" aria-label="Links úteis">
          <h4 className="footer__subtitle">Links úteis</h4>
          <ul>
            <li><a href="#top">Início</a></li>
            <li><a href="#about">Sobre Mim</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Carlos Eduardo Vernizzi Silva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
