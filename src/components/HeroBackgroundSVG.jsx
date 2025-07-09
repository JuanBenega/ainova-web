import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const HeroBackgroundSVG = () => {
  const { darkMode } = useTheme();

  const gradients = darkMode
    ? {
        grad1: "#0048FF3A",
        grad2: "#00DDFF3A",
        grad3: "#8800FF3A",
        grad4: "#FF84003A",
      }
    : {
        grad1: "#0048FF56",
        grad2: "#00DDFF56",
        grad3: "#8800FF56",
        grad4: "#FF840056",
      };
  
  const [randomTranslate, setRandomTranslate] = useState({
    fromX: 0,
    fromY: 0,
    toX: 0,
    toY: 0,
  });

  useEffect(() => {
    // Generar valores aleatorios para las posiciones de traslación
    const randomFromX = Math.floor(Math.random() * 200) - 100; // De -100 a 100
    const randomFromY = Math.floor(Math.random() * 200) - 100; // De -100 a 100
    const randomToX = Math.floor(Math.random() * 400) - 200; // De -200 a 200
    const randomToY = Math.floor(Math.random() * 400) - 200; // De -200 a 200

    setRandomTranslate({
      fromX: randomFromX,
      fromY: randomFromY,
      toX: randomToX,
      toY: randomToY,
    });
  }, []); // Ejecutar solo al cargar la página
  
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: gradients.grad1, stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
          />
        </radialGradient>
        <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: gradients.grad2, stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
          />
        </radialGradient>
        <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: gradients.grad3, stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
          />
        </radialGradient>
        <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            style={{ stopColor: gradients.grad4, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
          />
        </radialGradient>
      </defs>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 400 300"
          to="360 400 300"
          dur="10s"
          repeatCount="indefinite"
        />
        {/* Traslación del grupo con valores aleatorios */}
        <animateTransform
          attributeName="transform"
          type="translate"
          from={`${randomTranslate.fromX} ${randomTranslate.fromY}`}
          to={`${randomTranslate.toX} ${randomTranslate.toY}`}
          dur="10s"
          repeatCount="indefinite"
          additive="sum"
        />

        <circle cx="200" cy="200" r="450" fill="url(#grad1)" />
        <circle cx="400" cy="200" r="450" fill="url(#grad2)" />
        <circle cx="200" cy="400" r="450" fill="url(#grad3)" />
        <circle cx="400" cy="400" r="450" fill="url(#grad4)" />
      </g>
    </svg>
  );
};

export default HeroBackgroundSVG;
