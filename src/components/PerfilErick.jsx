import React from "react";

export default function PerfilErick() {
  return (
    <section className="perfil-erick">
      {/* Encabezado */}
      <header id="mainheader" className="hero">
        <div className="hero-content">
          <img
            src="/images/erick.png"
            alt="Neuyin"
            className="foto-perfil"
          />
          <h1 className="titulo-neuyin">Buenas, soy Erick Romero 👾</h1>
          <p>Tengo 33 años, vivo en CABA y me desempeño como tecnico en armado/reparacion de PC.</p>
          <p>
            Me encanta todo lo relacionado a la tecnologia, el cine, los videojuegos y la cultura japonesa.
          </p>
        </div>
      </header>

      {/* HOBBIES */}
      <section className="hobbies">
        <h2>Algunos de mis hobbies/habilidades</h2>
        <div className="hobbies-contenido">
          <div className="hobbies-cards">
            <div className="glas-card">
              <img src="/images/erick_pasear.png" alt="Persona en un museo"/>
              <p>Salir a caminar mucho y conocer lugares</p>
            </div>
            <div className="glas-card">
              <img src="/images/erick_cine.png" alt="persona dentro de un cine"/>
              <p>Ir a disfrutar de una buena peli al cine</p>
            </div>
            <div className="glas-card">
              <img src="/images/erick_games.png" alt="Back to the Future"/>
              <p>Disfrutar de los videojuegos junto con mi hermanito</p>
            </div>
            <div className="glas-card">
              <img src="/images/erick_reparar.jpg" alt="Back to the Future"/>
              <p>Me doy maña para reparar todo tipo de cosas en general.</p>
            </div>
            <div className="glas-card">
              <img src="/images/erick_descuento.jpg" alt="Back to the Future"/>
              <p>Mostrando esta foto en el cine obtenes 2x1 en peliculas 3D! valido hasta ayer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PELÍCULAS */}
      <section className="seccion peliculas">
        <h2>Algunas de mis pelis favoritas</h2>
          <div className="peliculas-grid">
            <div className="pelicula-card">
              <div className="pelicula-inner">
                <div className="pelicula-front">
                  <img
                    src="/images/future.jpg"
                    alt="Back to the Future"
                  />
                </div>
                <div className="pelicula-back">
                  <p>
                    Back to the Future (1985)
directed by: Robert Zemeckis – Me encanta la combinación de ciencia ficción, aventura y comedia que tiene esta película. Además, el concepto de viajar en el tiempo siempre me ha fascinado.
                  </p>
                </div>
              </div>
            </div>

            <div className="pelicula-card">
              <div className="pelicula-inner">
                <div className="pelicula-front">
                  <img src="/images/odisea.jpg" alt="2001: Odisea en el Espacio" />
                </div>
                <div className="pelicula-back">
                  <p>
                    2001: Odisea en el Espacio (1968)
directed by: Stanley Kubrick – Una de mis peliculas de culto favoritas, me encanta su narrativa visual y la forma en que aborda temas profundos sobre la humanidad y la tecnología.
                  </p>
                </div>
              </div>
            </div>

            <div className="pelicula-card">
              <div className="pelicula-inner">
                <div className="pelicula-front">
                  <img
                    src="/images/chihiro.jpg"
                    alt="El viaje de Chihiro"
                  />
                </div>
                <div className="pelicula-back">
                  <p>
                    "El viaje de Chihiro" (2001)
directed by: Hayao Miyazaki – Esta película de animación japonesa es una obra maestra visual y narrativa. Me encanta la forma en que combina elementos fantásticos con temas profundos sobre el crecimiento personal y la identidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

        
      </section>

      {/* MÚSICA */}
      <section className="seccion musica">
        <h2>Algunos de mis temas favoritos</h2>
        <div className="spotify-grid">
          <iframe
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2114810814&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            width="300"
            height="300"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A45719017&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            width="300"
            height="300"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1930382576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            width="300"
            height="300"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </section>
    </section>
  );
}
