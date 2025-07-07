import React, { createContext, useState, useEffect } from "react";

// 1️⃣ Creamos el contexto con un valor por defecto
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

export const ThemeProvider = ({ children }) => {
  // 2️⃣ Estado que controlará el modo
  const [darkMode, setDarkMode] = useState(false);

  // 3️⃣ Lógica para alternar el modo y guardarlo en localStorage
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem("darkMode", JSON.stringify(next));
      return next;
    });
  };

  // 4️⃣ Al cargar, leemos la preferencia guardada (o del sistema)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("darkMode"));
    if (saved !== null) {
      setDarkMode(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

useEffect(() => {
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark-mode' : 'light');
}, [darkMode]);

  // 5️⃣ Proveemos el estado y la función a toda la app
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
