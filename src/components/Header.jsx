import { useState, useEffect } from "react";

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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Puedes ajustar el valor según tu diseño
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" id="inicio">
      <nav className={`headerNav ${scrolled ? "headerScrolled" : ""}`}>
        <ul className="headerMenu">
          <li><a className="headerOption" href="#nosotros">Nosotros</a></li>
          <li><a className="headerOption" href="#valores">Valores</a></li>
          <li><a className="headerOption" href="#servicios">Servicios</a></li>
                  </ul>


        <a className="headerLogo" href="#inicio">
          <img className="headerLogoIcon" src={logo} alt="AINOVA Logo" />
          <img className={`headerLogoText ${scrolled ? "hideLogoText" : ""}`} src={logoText} alt="AINOVA Logo" />
        </a>


        <div className="headerMenu">
          <a className="headerOption" href="#contacto">Contacto</a>
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
              {/* <li><a href="#portfolio">Portfolio</a></li> */}
              <li><a href="#contacto">Contacto</a></li>
            </ul>

            <div className="menuSocials">
              <a 
                href="https://www.instagram.com/ainovasolution/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconInstagram} alt="Logo Instagram" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574987744035"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconFacebook} alt="Logo Facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/ainova-solution/"
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
