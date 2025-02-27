import Card from "./Card";
import Carousel from "./Carousel";
import SectionTitle from "./SectionTitle";

import iconTeam from "../assets/iconTeam.png";
import iconGive from "../assets/iconGive.png";
import iconPride from "../assets/iconPride.png";
import iconClient from "../assets/iconClient.png";
import iconReality from "../assets/iconReality.png";
import iconDream from "../assets/iconDream.png";

const Us = () => {
  const cardContent = [
    {
      icon: iconTeam,
      title: "Nos preocupamos por el equipo",
      text: "Trabajo en equipo y aprendizaje constante, un ambiente de crecimiento y reconocimiento continuo, nos caracteriza.",
    },
    {
      icon: iconGive,
      title: "Damos lo mejor siempre",
      text: "Nos apasiona lo que hacemos. Cada proyecto es una muestra de nuestro compromiso y superación.",
    },
    {
      icon: iconPride,
      title: "Orgullosos de lo que hacemos",
      text: "Desde la planificación hasta la entrega, cada etapa de nuestro trabajo está enfocada en la calidad.",
    },
    {
      icon: iconClient,
      title: "Cuidamos a nuestros clientes",
      text: "Trabajamos con vos y te acompañamos para lograr tus objetivos, para eso queremos superar tus expectativas siempre.",
    },
    {
      icon: iconReality,
      title: "Cambiamos realidades",
      text: "Buscamos soluciones creativas y disruptivas, impulsando ideas innovadoras para un futuro mejor.",
    },
    {
      icon: iconDream,
      title: "Creemos en nuestros sueños",
      text: "Al igual que vos, somos conscientes de la realidad pero decidimos seguir soñando para poder darte siempre lo mejor.",
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <SectionTitle
          badge="Nosotros"
          title="Nuestro equipo, nuestra historia"
          text="Descubre nuestra pasión por la tecnología y cómo transformamos negocios"
        />
      </div>
      <div className="usCardContainer">
        <section className="usCards">
          {cardContent.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </section>
      </div>
      <Carousel />
    </div>
  );
};

export default Us;
