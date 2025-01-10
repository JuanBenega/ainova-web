import Card from "./Card";


const Us = () => {

const cardContent = [
  {
    icon : "../assets/iconTeam.png",
    title: "Nos preocupamos por el equipo",
    text : "Trabajo en equipo y aprendizaje constante, un ambiente de crecimiento y reconocimiento continuo, nos caracteriza.",
  },
  {
    icon : "../assets/iconGive",
    title: "Damos lo mejor siempre",
    text : "Nos apasiona lo que hacemos. Cada proyecto es una muestra de nuestro compromiso y superación.",
  },
  {
    icon : "../assets/iconPride.png",
    title: "Orgullosos de lo que hacemos",
    text : "Desde la planificación hasta la entrega, cada etapa de nuestro trabajo está enfocada en la calidad.",
  },
  {
    icon : "../assets/iconClient.png",
    title: "Cuidamos a nuestros clientes",
    text : "Trabajamos con vos y te acompañamos para lograr tus objetivos, para eso queremos superar tus expectativas siempre.",
  },
  {
    icon : "../assets/iconReality.png",
    title: "Cambiamos realidades",
    text : "Buscamos soluciones creativas y disruptivas, impulsando ideas innovadoras para un futuro mejor.",
  },
  {
    icon : "../assets/iconDream.png",
    title: "Creemos en nuestros sueños",
    text : "Al igual que vos, somos conscientes de la realidad pero decidimos seguir soñando para poder darte siempre lo mejor.",
  }
]
  
  return (
    <div className="usSection">
      <section className="usTitle">
        <p className="badge">Nosotros</p>
        <h1 className="title">Nuestro equipo, nuestra historia</h1>
        <p className="usTitleText">Descubre nuestra pasión por la tecnología y cómo transformamos negocios</p>
      </section>
      <section className="usCards">
        {cardContent.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} text={card.text} />
        ))}
      </section>
      <section className="usCarousel"></section>
    </div>
  );
};

export default Us;
