import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("modo-oscuro"));
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Cierra el menú al cambiar el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Botón hamburguesa — fuera de la sidebar */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {open ? "✕" : "☰"}
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        {/* LOGO */}
        <div className="logo-container">
          <img
            src={isDarkMode ? "/images/logooscuro.png" : "/images/logo.png"}
            alt="Logo Frontend2025"
            className="logo-img"
          />
        </div>

        {/* MENÚ PRINCIPAL */}
        <nav className={`nav ${open ? "show" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setOpen(false)}>🏠 Inicio</NavLink></li>
            <li><NavLink to="/bitacora" onClick={() => setOpen(false)}>🗒️ Bitácora</NavLink></li>
            <li><NavLink to="/erick" onClick={() => setOpen(false)}>👨‍💻 Erick</NavLink></li>
            <li><NavLink to="/neuyin" onClick={() => setOpen(false)}>👩‍💻 Neuyin</NavLink></li>
            <li><NavLink to="/json" onClick={() => setOpen(false)}>🏆 Películas (JSON)</NavLink></li>
            <li><NavLink to="/api" onClick={() => setOpen(false)}>⛩️ Pelis Anime (API)</NavLink></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
