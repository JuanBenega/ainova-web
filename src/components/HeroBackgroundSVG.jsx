const HeroBackgroundSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            style={{ stopColor: "#0048FF56", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
          />
        </radialGradient>
        <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            style={{ stopColor: "#00DDFF56", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
          />
        </radialGradient>
        <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            style={{ stopColor: "#8800FF56", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
          />
        </radialGradient>
        <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            style={{ stopColor: "#FF840056", stopOpacity: 1 }}
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
          dur="40s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-100 -100"
          to="200 200"
          dur="40s"
          repeatCount="indefinite"
          additive="sum"
        />
        <circle cx="200" cy="200" r="400" fill="url(#grad1)">
          <animate
            attributeName="cx"
            from="200"
            to="600"
            dur="25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            from="200"
            to="400"
            dur="25s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="600" cy="200" r="400" fill="url(#grad2)">
          <animate
            attributeName="cx"
            from="600"
            to="400"
            dur="25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            from="200"
            to="400"
            dur="25s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="200" cy="400" r="400" fill="url(#grad3)">
          <animate
            attributeName="cx"
            from="200"
            to="600"
            dur="25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            from="400"
            to="200"
            dur="25s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="600" cy="400" r="400" fill="url(#grad4)">
          <animate
            attributeName="cx"
            from="600"
            to="400"
            dur="25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            from="400"
            to="200"
            dur="25s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
};

export default HeroBackgroundSVG;
