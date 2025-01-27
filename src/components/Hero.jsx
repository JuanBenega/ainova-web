import Button from "./Button";

const Hero = () => {

  const handleClick = () => {
    alert("Botón presionado!");
  };

  return (
    <div className="heroSection">
      <div className="heroContainer">
        <p className="heroTitle">
          Innovación y crecimiento <span className="titleRemark">PARA TU EMPRESA</span>
        </p>
        <p className="heroText">
          Somos AINOVA una empresa de <span className="titleRemark">servicios tecnológicos</span> en constante
          crecimiento, buscando siempre lo último en tecnologia para ayudarte.
        </p>
        <Button text="Empecemos!" onClick={handleClick} size="23px" weight="700" width="237px" height="65px" radius="72px" />
      </div>
    </div>
  );
};

export default Hero;
