import { StrictMode } from "react";
import React, { useState } from "react"


function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeNavbar = () => {
    setNavbarOpen(false)
  }

  return (
    <header className="header-main">
      <div className="header-container">
        <a className="nome-principal" href="#" style={{ marginLeft: '20px' }}>CV</a>

        <button className="menu-toggle" onClick={toggleNavbar}>
          ☰
        </button>

        <nav className="nav-desktop">
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>

      {/* Menu lateral mobile */}
      <div className={`side-menu ${navbarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="#" onClick={closeNavbar}>Início</a></li>
            <li><a href="#about" onClick={closeNavbar}>Sobre Mim</a></li>
            <li><a href="#skills" onClick={closeNavbar}>Habilidades</a></li>
            <li><a href="#projects" onClick={closeNavbar}>Projetos</a></li>
            <li><a href="#contact" onClick={closeNavbar}>Contato</a></li>
          </ul>
        </nav>
      </div>

      {navbarOpen && <div className="backdrop" onClick={closeNavbar}></div>}
    </header>

  )
}

export default Header;