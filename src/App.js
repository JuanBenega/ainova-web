import React from "react";

//importación de componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Us from "./components/Us";
import Values from "./components/Values";
import Services from "./components/Services";


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
    </div>
  );
}

export default App;
