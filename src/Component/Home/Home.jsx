import React from 'react'
import Hero from '../hero/Hero'
import Proto from '../Protofile/Protofilo'
import About from '../About/About'
import Contact from '../Contact/Contactme'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Hero/>
  <Proto/>
  <About/>
  <Contact/>
    </div>
  )
}

export default Home
