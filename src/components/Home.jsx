export default function Home() {
  return (
    <section>
      <div className="card" style={{textAlign:'center'}}>
        <img src="/img/logo.png" alt="Logo" width="120" height="120" style={{marginBottom:'1rem'}} />
        <h1>Frontend2025 — SPA React</h1>
        <p style={{fontFamily:'var(--font-alt)'}}>
          Proyecto migrado desde TP1. Equipo: <b>Neuyin</b> & <b>Erick</b>.  
          Estilos unificados con la estética de Neuyin (paleta pastel + modo oscuro).
        </p>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2>Objetivos</h2>
        <ul style={{marginTop:'.5rem'}}>
          <li>Migrar HTML/CSS/JS a componentes React reutilizables.</li>
          <li>Agregar sección con datos desde JSON local (≥20 objetos).</li>
          <li>Consumir una API pública y renderizar resultados.</li>
          <li>Publicar en Vercel con README y bitácora actualizados.</li>
        </ul>
      </div>
    </section>
  );
}