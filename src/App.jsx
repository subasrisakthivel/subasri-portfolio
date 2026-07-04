import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Qualifications from './components/Qualifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualifications/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
