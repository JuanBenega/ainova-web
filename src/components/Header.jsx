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
          <p className="headerLink">Nosotros</p>
          <p className="headerLink">Servicios</p>
          <p className="headerLink">Portfolio</p>
        </li>

        <div className="headerLogo">
          <img className="headerLogoIcon" src={logo} alt="AINOVA Logo" />
          <img className="headerLogoText" src={logoText} alt="AINOVA Logo" />
        </div>

        <div className="headerMenu">
          <p className="headerLink">Contacto</p>
          <Button text="INICIO" onClick={handleClick} size="18px" Weight="500" width="183px" height="39px" radius="16px" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
