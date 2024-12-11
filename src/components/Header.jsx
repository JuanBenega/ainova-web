import "../scss/components/_header.scss";

import logo from "../assets/ainovaLogo.png";
import logoText from "../assets/ainovaLogoText.png"

import Button from "./Button";

const Header = () => {
  //declaración de funciones
  const handleClick = () => {
    alert("Botón presionado!");
  };

  return (
    <header className="header">
      
      <nav className="headerNav">
        <li className="headerMenu">
          <p>Nosotros</p>
          <p>Servicios</p>
          <p>Portfolio</p>
        </li>

        <div className="headerLogo">
          <img className="headerLogoIcon" src={logo} alt="AINOVA Logo" />
          <img className="headerLogoText" src={logoText} alt="AINOVA Logo" />
        </div>

        <div className="headerMenu">
          <p>Contacto</p>
          <Button text="INICIO" onClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
