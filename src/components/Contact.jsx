import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contatos</h2>
      <p style={{fontWeight: "400"}}>Quer trocar uma ideia, colaborar ou só dar um oi? Me chama nas redes!</p>
      <div className="social-links">
        <a href="https://linkedin.com/in/carlosvernizzi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/EduardoVernizzi/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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

    
    </section>
  );
}