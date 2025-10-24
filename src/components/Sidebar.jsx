import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="logo">Frontend2025</div>

      {/* Botón hamburguesa solo visible en mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {open ? "✕" : "☰"}
      </button>

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
            <NavLink to="/api" onClick={() => setOpen(false)}>🌐 Datos (API)</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
