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
import Contact from "./components/Contact";
import Footer from "./components/Footer";


//importación de estilos
import "./scss/main.scss";

function App() {


  return (
    <div className="app">
      <HeroBackgroundSVG />

      <Header />
      <Hero />
      <Us />
      <Values />
      <Services />
      {/* <Portfolio /> */}
      <Ecosystem />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
