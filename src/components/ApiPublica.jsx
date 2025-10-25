import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApiPublica() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Obtenemos top anime movies de Jikan API
        const response = await axios.get('https://api.jikan.moe/v4/top/anime', {
          params: {
            type: 'movie',
            limit: 20
          }
        });
        
        setAnimeList(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los datos de la API: ' + err.message);
        setLoading(false);
        console.error('Error completo:', err);
      }
    };

    fetchAnime();
  }, []);

  if (loading) {
    return (
      <section>
        <div className="card" style={{ textAlign: "center" }}>
          <p>Cargando...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="card" style={{ textAlign: "center" }}>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="card" style={{ textAlign: "center" }}>
        <h2>🎌 Top 20 Anime Movies - Highest Rating</h2>
        <p>
          Explorá una selección de las mejores películas de anime según MyAnimeList.
        </p>
      </div>

      <div
        className="galeria"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem"
        }}
      >
        {animeList.map((anime) => (
          <div
            className="card"
            key={anime.mal_id}
            style={{
              textAlign: "center",
              transition: "transform 0.25s ease, box-shadow 0.25s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{
                width: "100%",
                height: "330px",
                objectFit: "cover",
                borderRadius: "var(--radius)",
                marginBottom: "0.8rem"
              }}
            />
            <h3 style={{ color: "var(--color-secundario)", marginBottom: "0.3rem" }}>
              {anime.title}
            </h3>
            <p>
              <b>Año:</b> {anime.aired?.from ? new Date(anime.aired.from).getFullYear() : 'N/A'}
            </p>
            <p>
              <b>Géneros:</b> {anime.genres.slice(0, 3).map(g => g.name).join(', ') || 'N/A'}
            </p>
            <p>⭐ {anime.score || 'N/A'}</p>
          </div>
        ))}
      </div>
    </section>
  );
}