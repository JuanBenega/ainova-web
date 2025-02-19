import SectionTitle from "./SectionTitle";

import icon1 from "../assets/iconNotion.png";
import icon2 from "../assets/iconFigma.png";
import icon3 from "../assets/iconGpt.png";
import icon4 from "../assets/iconAndroid.png";
import icon5 from "../assets/iconApple.png";
import icon6 from "../assets/iconAdobe.png";
import icon7 from "../assets/iconGoogle.png";
import icon8 from "../assets/icon Github.png";

const Ecosystem = () => {
  return (
    <div id="ecosystem" className="section container">
      <SectionTitle
        badge="Empresas"
        title="Un ecosistema de innovación"
        text="Descubre las empresas líderes con las que colaboramos."
      />
      <div className="ecoIcons">
        <img src={icon1} alt="Notion" />
        <img src={icon2} alt="Figma" />
        <img src={icon3} alt="Chat GPT" />
        <img src={icon4} alt="Android" />
        <img src={icon5} alt="Apple" />
        <img src={icon6} alt="Adobe" />
        <img src={icon7} alt="Google" />
        <img src={icon8} alt="Github" />
      </div>
    </div>
  );
};

export default Ecosystem;
