import { useState } from "react";
import SectionTitle from "./SectionTitle";

import contactImage from '../assets/contactImage.png';
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const servicesOptions = [
    "Website design",
    "UX / UI design",
    "User research",
    "Content creation",
    "Strategy & consulting",
    "Otros",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí integraríamos una API para manejar el envío del formulario
  };

  const handleClick = () => {
    alert("Botón presionado!");
  };


  return (
    <div id="contact" className="section container">
      <SectionTitle
        badge="Contacto"
        title="Hagamos crecer tu marca, juntos"
        text="Puedes contactarnos cuando quieras a info@ainova-solution.com."
      />
      <div className="contactFormContainer">
        <div className="contactFormImage">
          <img src={contactImage} alt="Formulario de contacto" />
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="nombre@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Whatsapp</label>
          <input
            type="tel"
            name="phone"
            placeholder="+54 (11) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>En qué podemos ayudar?</label>
          <textarea
            name="message"
            placeholder="Cuéntanos..."
            value={formData.message}
            onChange={handleChange}
          />

          <label>Servicios</label>
          <div className="servicesOptions">
            {servicesOptions.map((service, index) => (
              <label key={index} className="checkboxLabel">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleChange}
                />
                {service}
              </label>
            ))}
          </div>
        
         <button type="submit">Empecemos</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
