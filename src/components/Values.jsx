import SectionTitle from "./SectionTitle";

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
  return (
    <section className="section">
      <div className="valuesContainer">
        <SectionTitle
          badge="Valores"
          title="Lo que nos mueve"
          text="Nuestros valores son el corazón de nuestra empresa y eso lo hace un lugar especial"
        />
        <div className="valuesPopup">
          <img
            className="valuesBack"
            src={valuesBack}
            alt="Imagen de un celular"
          />
          <div className="balloon balloon-1">
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
          <div className="balloon balloon-2">
            <img src={avatarExc} alt="Imagen de excelencia" />
            <div className="ballonText">
              Excelencia
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
          <div className="balloon balloon-3">
            <img src={avatarInn} alt="Imagen de innovación" />
            <div className="ballonText">
              Inonvación
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
          <div className="balloon balloon-4">
            <img src={avatarLid} alt="Imagen de liderazgo" />
            Liderazgo
            <div className="ballonText">
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
          <div className="balloon balloon-5">
            <img src={avatarCol} alt="Imagen de colaboración" />
            <div className="ballonText">
              Colaboración
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
          <div className="balloon balloon-6">
            <img src={avatarEmp} alt="Imagen de empatía" />
            <div className="ballonText">
              Empatía
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
          <div className="balloon balloon-7">
            <img src={avatarAct} alt="Imagen de actitud positiva" />
            <div className="ballonText">
              Actitud positiva
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
          <div className="balloon balloon-8">
            <img src={avatarRes} alt="Imagen de resiliencia" />
            <div className="ballonText">
              Resiliencia
              <br />
              <small>
                Nos basamos en la honestidad y la transparencia para una
                sostenibilidad a largo plazo
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
