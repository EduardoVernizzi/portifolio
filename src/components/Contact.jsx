import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contato</h2>

      <div className="contact-cards-container">
        <div className="contact-card why-choose">
          <h3>Por que me escolher?</h3>
          <ul>
            <li>Desenvolvedor dedicado e comprometido com qualidade.</li>
            <li>Entrego soluções modernas, eficientes e escaláveis.</li>
            <li>Aprendo rápido e sou focado em inovação contínua.</li>
            <li>Trabalho bem em equipe com comunicação clara.</li>
          </ul>
        </div>

        <div className="contact-card contact-info-card">
          <h3>Informações de contato</h3>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <a href="mailto:eduardo.vernizzi@hotmail.com">eduardo.vernizzi@hotmail.com</a>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+5511995906506">(11) 99590-6506</a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>São Paulo, Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}
