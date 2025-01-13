import Slider from "react-slick";

import img1 from "../assets/imgEnjoy.png";
import img2 from "../assets/imgGrow.png";
import img3 from "../assets/imgEnjoy.png";
import img4 from "../assets/imgGrow.png";
import img5 from "../assets/imgPasion.png";

const Carousel = () => {
  const settings = {
    dots: false, // Muestra puntos para navegación
    infinite: true, // Loop infinito
    speed: 500,
    slidesToShow: 5, // Cantidad de imágenes visibles
    slidesToScroll: 1,
    autoplay: true, // Activa el avance automático
    autoplaySpeed: 3000, // Velocidad en milisegundos (3 segundos)
    cssEase: "ease-in-out", // Suavizado más fluido
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Para pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Para pantallas medianas
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [
    { src: img1, text: "Trabajamos duro" },
    { src: img2, text: "Disfrutamos el proceso" },
    { src: img3, text: "Nos apasiona el diseño" },
    { src: img4, text: "Nos encanta verte crecer" },
    { src: img5, text: "Creemos en el futuro" },
  ];

  return (
    <div className="carouselContainer">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carouselSlide">
            <img src={image.src} alt={image.text} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
