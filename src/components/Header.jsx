import { Link } from "react-router-dom";

import logo from "../assets/ainovaLogo.png";
import logoText from "../assets/ainovaLogoText.png";

import Button from "./Button";

const Header = () => {
  //declaración de funciones
  const handleClick = () => {
    alert("Botón presionado!");
  };

  return (
    <header className="header">
      {/* Capa Violeta: se desplaza con el scroll */}
      <div className="headerViolet"></div>

      {/* Capa Gris Semitransparente: se queda fija al hacer scroll */}
      <div className="headerNavContainer">
        <nav className="headerNav">
          <ul className="headerMenu">
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Portfolio</li>
          </ul>


          <div className="headerLogo">
            <img className="headerLogoIcon" src={logo} alt="AINOVA Logo" />
            <img className="headerLogoText" src={logoText} alt="AINOVA Logo" />
          </div>

          <div className="headerMenu">
            <li className="headerLink">Contacto</li>
            <button>INICIO</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
