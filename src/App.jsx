import { StrictMode } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import Header from './components/Header'
import Cta from './components/Cta'
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);


  return (
    <>
    <Header/>
    <Cta/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
     
    </>
  )
}

export default App
