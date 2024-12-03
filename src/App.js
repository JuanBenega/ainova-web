import React from "react";

//importación de componentes
import Header from './components/Header'
import Button from "./components/Button";

//importación de estilos
import "./scss/main.scss";


function App() {

  //declaración de funciones
  const handleClick = () => {
    alert("Botón presionado!");
  };

  return (
    <Header />
  );
}

export default App;
