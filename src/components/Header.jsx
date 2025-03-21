import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/ainovaLogo.png";
import logoText from "../assets/ainovaLogoText.png";
import hamburgerIcon from "../assets/modibleNavButton.png"
import iconInstagram from "../assets/toggleIconInstagram.png";
import iconFacebook from "../assets/toggleIconFacebook.png";
import iconLinkedin from "../assets/toggleIconLinkedin.png";
import logoToggle from "../assets/logoToggle.png";





const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="headerNav">
        <ul className="headerMenu">
          <li><a className="headerOption" href="#nosotros">Nosotros</a></li>
          <li><a className="headerOption" href="#servicios">Servicios</a></li>
          <li><a className="headerOption" href="#portfolio">Portfolio</a></li>
        </ul>

        
          <a className="headerLogo" href="#inicio">
            <img className="headerLogoIcon" src={logo} alt="AINOVA Logo" />
            <img className="headerLogoText" src={logoText} alt="AINOVA Logo" />
          </a>
        

        <div className="headerMenu">
          <li className="headerLink"><a className="headerOption" href="#contacto">Contacto</a></li>
          <a className="headerButton" href="#inicio">INICIO</a>
        </div>
        <div className="menuButton">
          <img src={hamburgerIcon} alt="Menú hamburgesa" onClick={toggleMenu} />
        </div>

        {/* Menú lateral */}
        <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          <div className="menuContent">
            <img src={logoToggle} alt="AINOVA Logo" className="menuLogo" />

            <ul className="menuLinks">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>

            <div className="menuSocials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconInstagram} alt="Logo Instagram" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconFacebook} alt="Logo Facebook" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconLinkedin} alt="Logo Linkedin" />
              </a>
            </div>
          </div>
        </div>

        {/* Fondo oscurecido cuando el menú está abierto */}
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </nav>
    </header>
  );
};

export default Header;
