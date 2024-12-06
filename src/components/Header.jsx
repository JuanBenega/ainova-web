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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="89"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M0 44.8174C0 20.177 20.1746 0.308166 44.8122 0.684504L736.5 11.25L1395.2 0.716469C1419.82 0.322641 1440 20.1784 1440 44.8089C1440 69.5863 1419.59 89.5003 1394.82 88.8937L736.5 72.7734L45.1702 88.9435C20.3961 89.5229 0 69.5983 0 44.8174Z"
          fill="url(#paint0_linear_282_14068)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_282_14068"
            x1="720"
            y1="0"
            x2="720"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7E73FF" />
            <stop offset="1" stop-color="#6941C6" />
          </linearGradient>
        </defs>
      </svg> */}
      <nav className="headerNav">
        <p>Header</p>
        {/* <div className="headerMenuContainer">
                    <li className='headerMenu'>
                        <p>Nosotros</p>
                        <p>Servicios</p>
                        <p>Portfolio</p>
                    </li>
                </div>
                <div className="headerLogo">
                    <img src={logo} alt="AINOVA Logo" />
                </div>
                <p>Contacto</p>
                <Button text="INICIO" onClick={handleClick}/> */}
      </nav>
    </header>
  );
};

export default Header;
