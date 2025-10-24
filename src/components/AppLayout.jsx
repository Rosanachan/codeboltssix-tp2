import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    if (modoOscuro) document.body.classList.add("modo-oscuro");
    else document.body.classList.remove("modo-oscuro");
  }, [modoOscuro]);

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <div className="toggle-theme">
          <button
            onClick={() => setModoOscuro(!modoOscuro)}
            className="btn"
          >
            {modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>

        {children}
      </main>
    </div>
  );
}
