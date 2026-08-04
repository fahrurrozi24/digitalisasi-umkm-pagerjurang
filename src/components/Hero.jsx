import "./Hero.css";
import merapi from "../assets/images/Gunung Merapi.jpeg";

export default function Hero() {
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
            Padukuhan Pagerjurang,
            <br />
            Kalurahan Kepuharjo
          </h1>

          <p>
            Menyajikan informasi mengenai profil Padukuhan Pagerjurang,
            UMKM lokal, potensi wisata, berita kegiatan masyarakat,
            galeri dokumentasi, serta informasi kontak secara digital.
          </p>

          <div className="hero-button">
            <button className="btn-primary">
              Jelajahi UMKM
            </button>

            <button className="btn-secondary">
              Tentang Pagerjurang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}