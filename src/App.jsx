import { Fragment } from "react";
import Navbar from "./Component/Navbar/Navbar";'./Component/Navbar/Navbar.jsx'
import Hero from './Component/hero/Hero.jsx';
import Proto from "./Component/Protofile/Protofilo.jsx";
import About from './Component/About/About.jsx';
import Contact from "./Component/Contact/Contactme.jsx";
function App(){



  return (
<Fragment>
  <Navbar></Navbar>
  <Hero></Hero>
  <Proto></Proto>
  <About></About>
  <Contact></Contact>
</Fragment>
  )
}

export default App;