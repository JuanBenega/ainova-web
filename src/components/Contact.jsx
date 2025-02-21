import { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from "emailjs-com";

import contactImage from "../assets/contactImage.png";
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

  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [modalMessage, setModalMessage] = useState(""); // "" (vacío), "success", "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ainova", // Reemplaza con tu Service ID de EmailJS
        "template_ainova", // Reemplaza con tu Template ID
        formRef.current,
        "NmWDZyevDrFHicMLL" // Reemplaza con tu User ID (public key)
      )
      .then((result) => {
        console.log("Mensaje enviado:", result.text);
        setModalMessage("success");
        setStatus("Mensaje enviado con éxito!");
      })
      .catch((error) => {
        console.error("Error al enviar:", error.text);
        setModalMessage("error");
        setStatus("Error al enviar el mensaje. Inténtalo de nuevo.");
      });
  };

  const closeModal = () => {
    setModalMessage("");
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
        <form className="contactForm" onSubmit={sendEmail} ref={formRef}>
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

        {/* Modal condicional */}
        {modalMessage === "success" && (
          <div className="modalOverlay">
            <div className="modalContent">
              <h3>¡Gracias por tu contacto!</h3>
              <p>
                Tu mensaje se envió con éxito. Te responderemos a la brevedad.
              </p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}

        {modalMessage === "error" && (
          <div className="modalOverlay">
            <div className="modalContent">
              <h3>Hubo un problema</h3>
              <p>No pudimos enviar tu mensaje. Inténtalo de nuevo más tarde.</p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
