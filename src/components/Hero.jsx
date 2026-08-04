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

        <span className="hero-tag">
          WEBSITE RESMI PADUKUHAN PAGERJURANG
        </span>

        <h1>
          Digitalisasi Profile
          <br />
          Padukuhan Pagerjurang, Kalurahan Kepuharjo
        </h1>

        <p>
          Menyajikan informasi mengenai profile Padukuhan Pagerjurang,
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
    </section>
  );
}