import React from "react";
import "./scss/main.scss";

import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("Botón presionado!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>¡Bienvenido a mi Aplicación!</h1>
      <Button text="Haz clic aquí" onClick={handleClick} />
    </div>
  );
}

export default App;
