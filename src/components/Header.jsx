import { Link } from "react-router-dom";

import logo from "../assets/ainovaLogo.png";
import logoText from "../assets/ainovaLogoText.png";
import hamburgerIcon from "../assets/modibleNavButton.png"

const Header = () => {
  return (
    <header className="header">
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
          <button className="headerButton">INICIO</button>
        </div>
        <div className="menuButton">
            <img src={hamburgerIcon} alt="Menú hamburgesa" />
          </div>
      </nav>
    </header>
  );
};

export default Header;
