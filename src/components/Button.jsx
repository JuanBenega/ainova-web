function Button({ text, onClick, size, weight, width, height, radius }) {
  
  const buttonStyle = {
    fontSize: size || "inherit", // Aplica el valor recibido o un valor predeterminado
    fontWeight: weight || "normal", // Aplica el valor recibido o un valor predeterminado
    width: width,
    height: height,
    borderRadius: radius || "16px"
  };

  return (
    <button className="button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
