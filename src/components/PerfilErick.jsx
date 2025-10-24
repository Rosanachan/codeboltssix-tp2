export default function PerfilErick() {
  return (
    <section>
      <div className="card" style={{textAlign:'center'}}>
        <img
          src="/img/erick_avatar.jpg"
          alt="Erick"
          width="150"
          height="150"
          style={{borderRadius:'50%', marginBottom:'1rem', objectFit:'cover'}}
        />
        <h1>Erick Romero</h1>
        <p>Edad: 33 años</p>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2>Hobbies</h2>
        <ul style={{marginTop:'.5rem'}}>
          <li>Edición y tecnología</li>
          <li>Videojuegos y ciencia ficción</li>
          <li>Música y deportes</li>
        </ul>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2>Películas favoritas</h2>
        <ul style={{marginTop:'.5rem'}}>
          <li>Volver al Futuro</li>
          <li>2001: Odisea en el Espacio</li>
          <li>El viaje de Chihiro</li>
          <li>Mr. Nobody</li>
        </ul>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2>Música favorita</h2>
        <ul style={{marginTop:'.5rem'}}>
          <li>One Ok Rock — “Dreamer”</li>
          <li>Skrillex — “Bangarang”</li>
          <li>Michael Jackson — “Beat It”</li>
        </ul>
      </div>
    </section>
  );
}
