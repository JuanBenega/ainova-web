import { useTheme } from "../context/ThemeContext";

import iconInstagram from "../assets/footerIconInstagram.png";
import iconFacebook from "../assets/footerIconFacebook.png";
import iconLinkedin from "../assets/footerIconLinkedin.png";
import logo from "../assets/footerLogo.png";
import iconDarkInstagram from "../assets/footerDarkIconInstagram.png";
import iconDarkFacebook from "../assets/footerDarkIconFacebook.png";
import iconDarkLinkedin from "../assets/footerDarkIconLinkedin.png";
import logoDark from "../assets/footerDarkLogo.png";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className="footer">
      <div className="footerContent">
        {/* Sección izquierda: Logo y texto */}
        <a className="footerLeft" href="#inicio">
          <img src={darkMode ? logoDark : logo} alt="AINova Logo" className="footerLogo" />
          <p className="footerTagline">
            Innovación y crecimiento para tu empresa.
          </p>
        </a>

        {/* Sección central: Redes sociales */}
        <div className="footerCenter">
          <div className="footerSocials">
            <a
              href="https://www.instagram.com/ainovasolution/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={darkMode ? iconDarkInstagram : iconInstagram} alt="Logo Instagram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574987744035"
              target="_blank"
              rel="noreferrer"
            >
              <img src={darkMode ? iconDarkFacebook : iconFacebook} alt="Logo Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/ainova-solution/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={darkMode ? iconDarkLinkedin : iconLinkedin} alt="Logo Linkedin" />
            </a>
          </div>

          {/* Sección derecha: Derechos reservados */}
          <div className="footerRights">
            <p>AINova © 2024. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
