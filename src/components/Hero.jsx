import "./Hero.css";
import merapi from "../assets/images/Gunung Merapi.jpeg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${merapi})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">

          <span className="hero-tag">
            WEBSITE RESMI PADUKUHAN PAGERJURANG
          </span>

          <h1>
            Digitalisasi Profil
            <br />
            Padukuhan Pagerjurang
          </h1>

          <p>
            Menyajikan informasi mengenai profil Padukuhan Pagerjurang,
            potensi UMKM, wisata, berita, galeri kegiatan, dan informasi
            kontak secara digital sebagai media informasi masyarakat.
          </p>

          <div className="hero-button">

            <button
              className="btn-primary"
              onClick={() => navigate("/umkm")}
            >
              Jelajahi UMKM
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/profile")}
            >
              Tentang Pagerjurang
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;