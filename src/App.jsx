import { useState } from 'react'
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
  const [darkMode,setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" :""}>
      <Navbar 
      darkMode={darkMode}
      setDarkMode={setDarkMode}/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualifications/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
