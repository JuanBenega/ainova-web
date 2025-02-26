import SectionTitle from "./SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import slide1 from "../assets/projectSlide1.png";
import slide2 from "../assets/projectSlide2.png";
import slide3 from "../assets/projectSlide3.png";
import slide4 from "../assets/projectSlide4.png";
import slide5 from "../assets/projectSlide5.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="section container">
      <SectionTitle
        badge="Portfolio"
        title="Un portafolio de soluciones a medida"
        text="Desde el desarrollo web hasta la inteligencia artificial, hemos trabajado en una amplia variedad de proyectos. Explora nuestro portafolio y descubre cómo podemos ayudarte a alcanzar tus objetivos."
      />
       <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      breakpoints={{
        // Para pantallas pequeñas (hasta 767px)
        0: {
          slidesPerView: 1,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
          },
        },
        // Para pantallas medianas o mayores (768px en adelante)
        768: {
          slidesPerView: 2,
          coverflowEffect: {
            rotate: 25,
            stretch: 10,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          },
        },
      }}
    >
      {[slide1, slide2, slide3, slide4, slide5].map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Portfolio;
