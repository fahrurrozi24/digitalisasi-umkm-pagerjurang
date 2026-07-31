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
      {/* Hero */}
      <section
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "45px" }}>
          Berita Padukuhan Pagerjurang
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto 0",
            lineHeight: "30px",
          }}
        >
          Ikuti informasi terbaru mengenai kegiatan masyarakat,
          pembangunan, UMKM, serta berbagai aktivitas yang berlangsung
          di Padukuhan Pagerjurang.
        </p>
      </section>

      {/* Berita */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Berita Terbaru
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {berita.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              }}
            >
              <div
                style={{
                  height: "180px",
                  background: "#f2f2f2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
                }}
              >
                {item.gambar}
              </div>

              <div style={{ padding: "25px" }}>
                <span
                  style={{
                    background: "#2e7d32",
                    color: "white",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                  }}
                >
                  {item.kategori}
                </span>

                <h3
                  style={{
                    marginTop: "20px",
                  }}
                >
                  {item.judul}
                </h3>

                <p
                  style={{
                    color: "#777",
                    marginTop: "8px",
                    fontSize: "14px",
                  }}
                >
                  {item.tanggal}
                </p>

                <p
                  style={{
                    marginTop: "15px",
                    lineHeight: "28px",
                  }}
                >
                  {item.isi}
                </p>

                <button
                  style={{
                    marginTop: "20px",
                    background: "#2e7d32",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Penutup */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2>Tetap Ikuti Informasi Terbaru</h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "30px",
          }}
        >
          Website ini menjadi media informasi resmi Padukuhan Pagerjurang
          untuk menyampaikan berita, kegiatan, pembangunan, serta
          perkembangan UMKM kepada masyarakat.
        </p>
      </section>
    </>
  );
}

export default News;