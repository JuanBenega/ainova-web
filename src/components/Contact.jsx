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

  const sendEmail = async (e) => {
    e.preventDefault();

    const service_id = "service_ainova"; // Reemplaza con tu Service ID de EmailJS
    const template_contacto = "template_ainova"; // Reemplaza con tu Template ID
    const template_confirmacion = "template_confirmacion"; // Reemplaza con tu Template ID
    const user_id = "NmWDZyevDrFHicMLL"; // Reemplaza con tu User ID (public key)

    try {
      // Envío del formulario de contacto a AINova
      const internalResult =  await emailjs.sendForm(
        service_id,
        template_contacto,
        formRef.current,
        user_id
      );
      console.log("Email enviado:", internalResult.text);

      // Envío de la confirmación al usuario
      const confirmationResult =  await emailjs.sendForm(
        service_id,
        template_confirmacion,
        formRef.current,
        user_id
      );
      console.log("✅ Confirmación enviada al usuario:", confirmationResult.text);

      setModalMessage("success");
      setStatus("¡Mensaje enviado con éxito! Revisa tu bandeja de entrada.");

    } catch (error) {
      console.error("Error al enviar:", error.text);
      setModalMessage("error");
      setStatus("Error al enviar el mensaje. Inténtalo de nuevo.");
    }


  };

  const closeModal = () => {
    setModalMessage("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      services: [],
    });
    formRef.current.reset();
  };

  return (
    <div id="contacto" className="section container">
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
                {status}
              </p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}

        {modalMessage === "error" && (
          <div className="modalOverlay">
            <div className="modalContent">
              <h3>Hubo un problema</h3>
              <p>{status}</p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
