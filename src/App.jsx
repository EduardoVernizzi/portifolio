import React, { useEffect } from "react";

import Header from './components/Header'
import Cta from './components/Cta'
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";



function App() {

  return (
    <>
      <Header />
      <Cta />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
