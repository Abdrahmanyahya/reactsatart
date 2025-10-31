import { Fragment } from "react";
import Navbar from "./Component/Navbar/Navbar";'./Component/Navbar/Navbar.jsx'
import Hero from './Component/hero/Hero.jsx';
import Proto from "./Component/Protofile/Protofilo.jsx";
import About from './Component/About/About.jsx';
import Contact from "./Component/Contact/Contactme.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";

function App(){



  return (
<Fragment>
  <Navbar></Navbar>
  <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="Proto" element={  <Proto></Proto>}></Route>
   <Route path="about" element={  <About></About>}></Route>
   <Route path="contact" element={  <Contact></Contact>}></Route>
  </Routes>


  <Footer></Footer>
</Fragment>
  )
}

export default App;