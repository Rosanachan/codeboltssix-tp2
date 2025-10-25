import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detecta si el body tiene la clase modo-oscuro
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("modo-oscuro"));
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setOpen(!open);

   return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* LOGO Y TÍTULO */}
      <div className="logo-container">
        <img
          src={isDarkMode ? "/images/logooscuro.png" : "/images/logo.png"}
          alt="Logo Frontend2025"
          className="logo-img"
        />
      </div>

      {/* BOTÓN HAMBURGUESA (solo móvil) */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {open ? "✕" : "☰"}
      </button>

      {/* MENÚ PRINCIPAL */}

      <nav className={`nav ${open ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>🏠 Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/bitacora" onClick={() => setOpen(false)}>🗒️ Bitácora</NavLink>
          </li>
          <li>
            <NavLink to="/erick" onClick={() => setOpen(false)}>👨‍💻 Erick</NavLink>
          </li>
          <li>
            <NavLink to="/neuyin" onClick={() => setOpen(false)}>👩‍💻 Neuyin</NavLink>
          </li>
          <li>
            <NavLink to="/json" onClick={() => setOpen(false)}>🏆 Películas (JSON)</NavLink>
          </li>
          <li>
            <NavLink to="/api" onClick={() => setOpen(false)}>⛩️ Pelis Animé (API)</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
