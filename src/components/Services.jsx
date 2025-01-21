import SectionTitle from "./SectionTitle";
import ServicesCard from "./ServicesCard";

import imgCardDesign from "../assets/serviceCardDesign.png";
import imgCardProduct from "../assets/serviceCardProduct.png";
import imgCardSoftware from "../assets/serviceCardSoftware.png";
import imgCardManagment from "../assets/serviceCardManagment.png";
import imgCardUser from "../assets/serviceCardUser.png";
import imgCardSocial from "../assets/serviceCardSocial.png";
import iconCards from "../assets/serviceCardIcon.png";
import WordsCarousel from "./WordsCarousel";

const Services = () => {
    const servicesData = [
        {
          category: "Design",
          icon: imgCardDesign,
          title: "Diseño y Desarrollo Web",
          description: "Combinamos diseño atractivo con funcionalidad para crear sitios web que se adapten a las necesidades de tu público.",
          bottomIcon: iconCards,
        },
        {
          category: "Product",
          icon: imgCardProduct,
          title: "Desarrollo de Marca",
          description: "Desarrollamos marcas fuertes en el entorno digital, optimizando tu presencia en línea.",
          bottomIcon: iconCards,
        },
        {
            category: "Software",
            icon: imgCardSoftware,
            title: "Rebranding y digitalización",
            description: "Ayudamos a las empresas a adaptarse a los cambios del mercado y a aprovechar las oportunidades que ofrece el mundo digital.",
            bottomIcon: iconCards,
          },
          {
            category: "Managment",
            icon: imgCardManagment,
            title: "Diseño e Identidad gráfica digital",
            description: "Desde la creación de logotipos hasta el desarrollo de guías de estilo, te acompañamos en todo el proceso de construcción de tu marca.",
            bottomIcon: iconCards,
          },
          {
            category: "User",
            icon: imgCardUser,
            title: "Usabilidad e investigación UX/UI",
            description: "Ofrecemos un servicio integral para crear productos digitales excepcionales.",
            bottomIcon: iconCards,
          },
          {
            category: "Social",
            icon: imgCardSocial,
            title: "Modernización de redes sociales",
            description: "Desarrollamos estrategias a medida para alcanzar tus objetivos de negocio.",
            bottomIcon: iconCards,
          }
        // Agrega más servicios según sea necesario
      ];
  
    return (
    <div id="services" className="section container">
      <SectionTitle
        badge="Servicios"
        title="Transforma tu negocio con más tecnología"
        text="Aumenta tu eficiencia, mejora la experiencia del cliente y toma mejores decisiones con nuestros servicios tecnológicos. Nuestros expertos te ayudarán a aprovechar al máximo las últimas tendencias tecnológicas y a superar los desafíos de tu industria."
      />

      <div className="servicesCardsContainer">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            category={service.category}
            icon={service.icon}
            title={service.title}
            description={service.description}
            bottomIcon={service.bottomIcon}
          />
        ))}
      </div>
      <WordsCarousel />
    </div>
  );
};

export default Services;
