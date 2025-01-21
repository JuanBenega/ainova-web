
const ServicesCard = ({ category, icon, title, description, bottomIcon }) => {
  return (
    <div className="servicesCard">
      <div className="servicesCardHeader">
        <img src={icon} alt={`${title} icon`} className="servicesCardIcon" />
        <p className="servicesCardCategory">{category}</p>
      </div>
      <h3 className="servicesCardTitle">{title}</h3>
      <p className="servicesCardDescription">{description}</p>
      <div className="servicesCardFooter">
        <img src={bottomIcon} alt="Icono decorativo" className="servicesCardBottomIcon" />
      </div>
    </div>
  );
};

export default ServicesCard;
