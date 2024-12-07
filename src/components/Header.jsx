import "../scss/components/_header.scss";

import logo from "../assets/ainovaLogo.png";

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

        {/* <div className="headerLogo">
          <img src={logo} alt="AINOVA Logo" />
        </div> */}
        <div className="headerMenu">
          <p>Contacto</p>
          <Button text="INICIO" onClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
