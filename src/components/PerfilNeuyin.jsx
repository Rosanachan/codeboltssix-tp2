export default function PerfilNeuyin() {
  return (
    <section>
      <div className="card" style={{textAlign:'center'}}>
        <img
          src="/images/neuyin.png"
          alt="Neuyin"
          width="150"
          height="150"
          style={{borderRadius:'50%', marginBottom:'1rem', objectFit:'cover'}}
        />
        <h1 style={{marginBottom:'0.5rem'}}>Hola, soy Neuyin Herrera 🌸</h1>
        <p style={{fontFamily:'var(--font-alt)'}}>
          Tengo 35 años, vivo en CABA y tengo facilidad para organizar, decorar y comunicar.</p>
          <p>Me encanta la estética, el orden, la música y la cultura japonesa. Mi pasatiempo es editar fotos y videos.
        </p>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2 style={{marginBottom:'1rem'}}>Estas son mis habilidades principales</h2>
        <ul style={{display:'grid', gap:'.75rem', listStyle:'none', padding:0}}>
          <li><b>🎬 Edición</b> — Experiencia desde 2012: stories, reels, montajes y narrativos con postproducción.</li>
          <li><b>🎉 Decoración</b> — Estética, combinación de colores, ambientación de eventos y espacios.</li>
          <li><b>💡 Creatividad Digital</b> — Ideas visuales, trends, moodboards, reels temáticos.</li>
          <li><b>🗂️ Organización</b> — Planificación, to-do lists, control visual del avance.</li>
        </ul>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2>Estás son mis películas favoritas</h2>
        <ul style={{marginTop:'.5rem'}}>
          <li>“Cuestión de tiempo” — vivir en el presente.</li>
          <li>“Memoirs of a Geisha” — estética y disciplina.</li>
          <li>“Eterno resplandor de una mente sin recuerdos” — valor de las memorias.</li>
        </ul>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2>Mi música favorita</h2>
        <ul style={{marginTop:'.5rem'}}>
          <li>Gojira</li>
          <li>Rammstein</li>
          <li>The Killers</li>
        </ul>
      </div>
    </section>
  );
}
