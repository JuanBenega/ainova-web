import SectionTitle from "./SectionTitle";
import { Carousel } from "react-responsive-carousel";

import slide1 from "../assets/projectSlide1.png";
import slide2 from "../assets/projectSlide2.png";
import slide3 from "../assets/projectSlide3.png";
import slide4 from "../assets/projectSlide4.png";
import slide5 from "../assets/projectSlide5.png";

const Portfolio = () => {
  const projects = [
    { id: 1, image: slide1 },
    { id: 2, image: slide2 },
    { id: 3, image: slide3 },
    { id: 4, image: slide4 },
    { id: 5, image: slide5 },
  ];

  return (
    <div id="portfolio" className="section container">
      <SectionTitle
        badge="Portfolio"
        title="Un portafolio de soluciones a medida"
        text="Desde el desarrollo web hasta la inteligencia artificial, hemos trabajado en una amplia variedad de proyectos. Explora nuestro portafolio y descubre cómo podemos ayudarte a alcanzar tus objetivos."
      />
      <div className="portfolioCarousel">
        <Carousel
          showArrows={true} // Flechas de navegación
          infiniteLoop={true} // Loop infinito
          autoPlay={false} // Reproducción automática
          interval={5000} // Intervalo entre diapositivas
          showThumbs={false} // Oculta las miniaturas
          showStatus={false} // Oculta el estado del carrusel
          centerMode={true} // Activa el modo centrado
          centerSlidePercentage={50} // Porcentaje que ocupa el slide central          
        >
          <div>
            <img src={slide1} alt="Project 1" />
          </div>
          <div>
            <img src={slide2} alt="Project 2" />
          </div>
          <div>
            <img src={slide3} alt="Project 3" />
          </div>
          <div>
            <img src={slide4} alt="Project 4" />
          </div>
          <div>
            <img src={slide5} alt="Project 5" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
