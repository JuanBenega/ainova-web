import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroBackgroundSVG from "./components/HeroBackgroundSVG";

//importación de componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Us from "./components/Us";
import Values from "./components/Values";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Ecosystem from "./components/Ecosystem";

import Button from "./components/Button";

//importación de estilos
import "./scss/main.scss";

function App() {
  //declaración de funciones
  const handleClick = () => {
    alert("Botón presionado!");
  };

  return (
    <div className="app">
      <HeroBackgroundSVG />

      <Header />
      <Hero />
      <Us />
      <Values />
      <Services />
      <Portfolio />
      <Ecosystem />
    </div>

    // <BrowserRouter>
    // <div className="app">
    //   <Header />
    //   <Routes>
    //     <Route path='/' element= {<Hero />} />
    //     <Route path='/us' element= {<Us />} />
    //     <Route path='/values' element= {<Values />} />
    //     <Route path='/services' element= {<Services />} />
    //   </Routes>
    // </div>
    // </BrowserRouter>
  );
}

export default App;
