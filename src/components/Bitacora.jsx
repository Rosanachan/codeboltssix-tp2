export default function Bitacora() {
  const items = [
    '05/09/25: Se definió el esquema de colores y tipografía.',
    '07/09/25: Implementadas animaciones en la portada.',
    '12/09/25: Ajustes de responsive.',
    '18/09/25: Creación de páginas individuales de cada integrante.'
  ];

  return (
    <section className="bitacora">
      <div className="card">
        <h2>Bitácora del Proyecto</h2>
        <ul style={{marginTop:'.5rem'}}>
          {items.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}