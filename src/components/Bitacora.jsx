export default function Bitacora() {
  return (
    <section className="bitacora">
      {/* ENCABEZADO */}
      <div className="card">
        <h2>🗒️ Bitácora del Proyecto</h2>
        <p>
          Esta sección contiene una descripción del proceso de desarrollo del proyecto,
          incluyendo decisiones de diseño, dificultades encontradas y cambios importantes
          realizados durante la implementación. 
          La bitácora comenzó en el TP1 y se amplía en el TP2, registrando la evolución del trabajo
          ahora realizado por <b>Neuyin</b> y <b>Erick</b>.
        </p>
      </div>

      {/* REGISTROS TP1 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>📅 Registros TP1</h3>
        <ul style={{ marginTop: ".5rem" }}>
          <li>05/09/25 — Se definió el esquema de colores y tipografía.</li>
          <li>07/09/25 — Implementadas animaciones en la portada.</li>
          <li>12/09/25 — Ajustes de diseño responsive.</li>
          <li>18/09/25 — Creación de páginas individuales de cada integrante.</li>
          <li>25/09/25 — Mejoras y correcciones generales.</li>
        </ul>

        <h4 style={{ marginTop: "1rem" }}>🧠 Decisiones de Diseño</h4>
        <p>
          En el TP1 se utilizó una paleta de tonos azules y grises, junto con la tipografía <b>Roboto</b> para transmitir profesionalismo y claridad. Se implementó un diseño responsive para 
          adaptarse a móviles y tablets, manteniendo coherencia visual entre las páginas de cada integrante.
        </p>

        <h4 style={{ marginTop: "1rem" }}>⚙️ Dificultades Encontradas</h4>
        <p>
          Durante el desarrollo del TP1, el equipo enfrentó desafíos con las animaciones en la portada
          y la adaptación responsive. Se resolvió mediante investigación en animaciones CSS y el uso
          de <b>media queries</b> y pruebas cruzadas en distintos dispositivos.
        </p>

        <h4 style={{ marginTop: "1rem" }}>🔄 Cambios Importantes</h4>
        <p>
          El proyecto pasó de ser un diseño estático a incluir interactividad mediante JavaScript.
          También se reorganizó la estructura de carpetas para mejorar la colaboración y el mantenimiento.
        </p>
      </div>

      {/* REGISTROS TP2 CON TIMELINE */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3 className="timeline-title">🚀 Registros TP2</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">👥</div>
            <p>03/10/25 — El grupo se reestructura: Neuyin y Erick continúan el proyecto.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎨</div>
            <p>05/10/25 — Se define una nueva paleta pastel basada en el perfil de Neuyin.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🪞</div>
            <p>07/10/25 — Se diseña el nuevo logo y se actualiza la identidad visual.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">⚛️</div>
            <p>10/10/25 — Migración completa del proyecto a React con estructura modular.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🧩</div>
            <p>12/10/25 — Creación de componentes reutilizables: Sidebar, AppLayout y Home.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎬</div>
            <p>15/10/25 — Se integra la sección de películas premiadas (datos JSON dinámicos).</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🌙</div>
            <p>18/10/25 — Implementación del modo oscuro con cambio de tema global. Elección de API.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">💻</div>
            <p>24/10/25 — Ajustes finales de responsive, coherencia y refinamiento de diseño.</p>
          </div>
        </div>
      </div>

      {/* DECISIONES TP2 */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h4>🎨 Decisiones de Diseño</h4>
        <p>
          En esta nueva etapa, se optó por un rediseño completo,
          con una paleta pastel de tonos lavanda, violeta y rosa. El estilo general busca ser moderno,
          limpio y agradable, con tipografía <b>Montserrat</b> para los títulos y <b>Roboto</b> para los textos.
          Se mantuvo la idea de coherencia visual, pero con más dinamismo y un enfoque “SPA”.
        </p>

        <h4 style={{ marginTop: "1rem" }}>⚙️ Dificultades y Resolución</h4>
        <p>
          La migración de HTML/CSS a React fue el mayor reto, especialmente en la separación en componentes,
          la organización del CSS global y la adaptación de rutas internas. Se resolvió investigando el uso de
          <b> React Router</b>, la gestión de estados locales con <b>useState</b>, y aplicando las buenas prácticas 
          del curso (Vite + JSX + props).
        </p>

        <h4 style={{ marginTop: "1rem" }}>🔄 Cambios y Evolución</h4>
        <p>
          Se eliminaron páginas duplicadas y se creó una estructura de componentes reutilizables.
          Se incorporó un <b>modo oscuro</b>, un <b>sidebar dinámico</b> y una sección de <b>películas premiadas</b> leídas desde un archivo JSON, demostrando manejo de datos locales.
          Además, se planifica integrar una <b>API pública de cine japonés</b> para el TP3.
        </p>

        <h4 style={{ marginTop: "1rem" }}>💭 Reflexión General</h4>
        <p>
          El proyecto pasó de ser un sitio estático con varias páginas HTML a convertirse en una 
          aplicación web moderna, modular y escalable. El proceso fortaleció el trabajo en equipo,
          la división de roles y la comprensión de las tecnologías de Frontend actual.
          Esta evolución representa el crecimiento técnico y estético de los integrantes.
        </p>
      </div>

      {/* ESTRUCTURA FINAL */}
      <div className="card" style={{ marginTop: "1rem" }}>
        <h3>📂 Estructura del Sistema</h3>
        <ul>
          <li>🏠 Inicio – Portada del proyecto y objetivos.</li>
          <li>🗒️ Bitácora – Registro del proceso completo de desarrollo.</li>
          <li>👨‍💻 Erick – Perfil personal y habilidades.</li>
          <li>👩‍💻 Neuyin – Perfil personal con identidad visual base del diseño.</li>
          <li>🏆 Películas (JSON) – Películas premiadas mostradas dinámicamente.</li>
          <li>⛩️ API – Conexión con datos externos de anime.</li>
          
        </ul>
      </div>
    </section>
  );
}
