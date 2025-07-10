import { StrictMode } from "react";



import { useEffect, useRef, useState } from "react";

function Cta() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="hero-section">
      <div
        ref={textRef}
        className={`hero-content ${isVisible ? "animate-slide-up" : ""}`}
      >
        <h1>Bem-vindo ao meu portfólio</h1>
        <p>Transformando ideias em experiências digitais elegantes e funcionais.</p>
        <a href="#about" className="btn-cta">
          Ver Mais
        </a>
      </div>
    </section>
  );
}

export default Cta;