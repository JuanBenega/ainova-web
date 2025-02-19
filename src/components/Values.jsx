import SectionTitle from "./SectionTitle";
import React, { useEffect, useRef, useState } from "react";

import valuesBack from "../assets/valuesBackground.png";
import avatarInt from "../assets/avatarIntegridad.png";
import avatarExc from "../assets/avatarExcelencia.png";
import avatarInn from "../assets/avatarInnovación.png";
import avatarLid from "../assets/avatarLiderazgo.png";
import avatarCol from "../assets/avatarColaboracon.png";
import avatarEmp from "../assets/avatarEmpatía.png";
import avatarAct from "../assets/avatarActitud.png";
import avatarRes from "../assets/avatarResiliencia.png";

const Values = () => {
  const sectionRef = useRef(null); // Referencia al contenedor de la sección
  const [isVisible, setIsVisible] = useState(false); // Estado para la visibilidad

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Activa la animación
        }
      },
      { threshold: 0.5 } // Se activa cuando el 20% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect(); // Desactiva el observador
      }
    };
  }, []);

  return (
    <section className="section">
      <div className="valuesContainer">
        <SectionTitle
          badge="Valores"
          title="Lo que nos mueve"
          text="Nuestros valores son el corazón de nuestra empresa y eso lo hace un lugar especial"
        />
        <div ref={sectionRef} className="valuesPopup">
          <img
            className="valuesBack"
            src={valuesBack}
            alt="Imagen de un celular"
          />
          <div className={`balloon balloon-1 ${isVisible ? "animate" : ""}`}>
            <img src={avatarInt} alt="Imagen de integridad" />
            <div className="ballonText">
              Integridad
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
          <div className={`balloon balloon-2 ${isVisible ? "animate" : ""}`}>
            <img src={avatarExc} alt="Imagen de excelencia" />
            <div className="ballonText">
              Excelencia
              <br />
              <small>
                Cultura de mejora continua para superar todo tipo de
                expectativas con un impacto significativo
              </small>
            </div>
          </div>
          <div className={`balloon balloon-3 ${isVisible ? "animate" : ""}`}>
            <img src={avatarInn} alt="Imagen de innovación" />
            <div className="ballonText">
              Inonvación
              <br />
              <small>
                Creación de nuevas soluciones que responden a las cambiantes
                necesidades del mercado
              </small>
            </div>
          </div>
          <div className={`balloon balloon-4 ${isVisible ? "animate" : ""}`}>
            <img src={avatarLid} alt="Imagen de liderazgo" />
            <div className="ballonText">
              Liderazgo
              <br />
              <small>
                Inspirar a las personas a trascender sus límites y a crear un
                futuro mejor
              </small>
            </div>
          </div>
          <div className={`balloon balloon-5 ${isVisible ? "animate" : ""}`}>
            <img src={avatarCol} alt="Imagen de colaboración" />
            <div className="ballonText">
              Colaboración
              <br />
              <small>
                Fomentamos un entorno donde la diversidad de ideas y habilidades
                se unen para resolver desafíos
              </small>
            </div>
          </div>
          <div className={`balloon balloon-6 ${isVisible ? "animate" : ""}`}>
            <img src={avatarEmp} alt="Imagen de empatía" />
            <div className="ballonText">
              Empatía
              <br />
              <small>
                Al comprender y compartir los sentimientos de los demás, creamos
                relaciones más profundas
              </small>
            </div>
          </div>
          <div className={`balloon balloon-7 ${isVisible ? "animate" : ""}`}>
            <img src={avatarAct} alt="Imagen de actitud positiva" />
            <div className="ballonText">
              Actitud positiva
              <br />
              <small>
                Nos permite enfrentar los desafíos con optimismo y encontrar
                soluciones creativas
              </small>
            </div>
          </div>
          <div className={`balloon balloon-8 ${isVisible ? "animate" : ""}`}>
            <img src={avatarRes} alt="Imagen de resiliencia" />
            <div className="ballonText">
              Resiliencia
              <br />
              <small>
                Adaptarnos, aprender y crecer a partir de cualquier experiencia
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
