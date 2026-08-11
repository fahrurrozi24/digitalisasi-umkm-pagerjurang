import beritaBackground from "../assets/images/Berita.jpeg";
import "./News.css";

function News() {
  const berita = [
    {
      judul: "Kegiatan Gotong Royong Warga Pagerjurang",
      tanggal: "20 Juli 2026",
      kategori: "Kegiatan",
      gambar: "🧹",
      isi:
        "Masyarakat Padukuhan Pagerjurang melaksanakan kegiatan gotong royong membersihkan lingkungan sebagai bentuk kepedulian terhadap kebersihan dan kesehatan lingkungan.",
    },

    {
      judul: "Pelatihan Digitalisasi UMKM",
      tanggal: "15 Juli 2026",
      kategori: "UMKM",
      gambar: "💻",
      isi:
        "Pelaku UMKM mengikuti pelatihan pemasaran digital untuk meningkatkan daya saing produk lokal melalui media sosial dan website.",
    },

    {
      judul: "Panen Raya Hasil Pertanian",
      tanggal: "10 Juli 2026",
      kategori: "Pertanian",
      gambar: "🌾",
      isi:
        "Petani Pagerjurang berhasil melaksanakan panen raya sebagai bentuk keberhasilan pengelolaan pertanian yang berkelanjutan.",
    },

    {
      judul: "Peringatan Hari Kemerdekaan",
      tanggal: "17 Agustus 2026",
      kategori: "Kegiatan",
      gambar: "🇮🇩",
      isi:
        "Berbagai perlombaan dan kegiatan masyarakat diselenggarakan untuk memeriahkan Hari Kemerdekaan Republik Indonesia.",
    },
  ];

  return (
    <>
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="news-hero">
        <h1>Berita Padukuhan Pagerjurang</h1>

        <p>
          Ikuti informasi terbaru mengenai kegiatan masyarakat,
          pembangunan, UMKM, serta berbagai aktivitas yang berlangsung
          di Padukuhan Pagerjurang.
        </p>
      </section>

      {/* ========================= */}
      {/* BERITA */}
      {/* ========================= */}

      <section
        className="news-section"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.65)
          ), url(${beritaBackground})`,
        }}
      >
        <div className="news-container">

          <div className="news-heading">
            <span>INFORMASI TERKINI</span>

            <h2>Berita Terbaru</h2>

            <p>
              Berbagai informasi dan kegiatan terbaru dari
              masyarakat Padukuhan Pagerjurang.
            </p>
          </div>

          <div className="news-grid">

            {berita.map((item, index) => (
              <div className="news-card" key={index}>

                {/* GAMBAR / ICON */}
                <div className="news-image">
                  <span>{item.gambar}</span>
                </div>

                {/* ISI CARD */}
                <div className="news-content">

                  <span className="news-category">
                    {item.kategori}
                  </span>

                  <h3>
                    {item.judul}
                  </h3>

                  <p className="news-date">
                    {item.tanggal}
                  </p>

                  <p className="news-description">
                    {item.isi}
                  </p>

                  <button
                    className="news-button"
                    onClick={() =>
                      alert(
                        `${item.judul}\n\n${item.isi}`
                      )
                    }
                  >
                    Baca Selengkapnya
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* PENUTUP */}
      {/* ========================= */}

      <section className="news-footer">

        <h2>
          Tetap Ikuti Informasi Terbaru
        </h2>

        <p>
          Website ini menjadi media informasi Padukuhan Pagerjurang
          untuk menyampaikan berita, kegiatan, pembangunan, serta
          perkembangan UMKM kepada masyarakat.
        </p>

      </section>
    </>
  );
}

export default News;