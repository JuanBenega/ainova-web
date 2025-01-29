import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importación de componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Us from "./components/Us";
import Values from "./components/Values";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

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
      <Header />
      <Hero />
      <Us />
      <Values />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
