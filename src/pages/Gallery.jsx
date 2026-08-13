import "./Gallery.css";
import galeriBackground from "../assets/images/Galeri.jpeg";

function Gallery() {
  const dokumentasi = [
    {
      minggu: "Minggu 1",
      kegiatan: "New Journey",
      tanggal: "20 Juli 2026",
      deskripsi:
        "Disini Perjalanan Kita Mulai.",
      icon: "/assets/images/foto1.jpeg",
    },

    {
      minggu: "Minggu 2",
      kegiatan: "Survei Lokasi & Pendataan UMKM",
      tanggal: "16 Juli 2026",
      deskripsi:
        "Mahasiswa melakukan survei wilayah serta pendataan UMKM sebagai dasar penyusunan program kerja.",
      icon: "📋",
    },

    {
      minggu: "Minggu 3",
      kegiatan: "Pelatihan Digitalisasi UMKM",
      tanggal: "22 Juli 2026",
      deskripsi:
        "Pendampingan penggunaan media digital untuk promosi produk UMKM masyarakat.",
      icon: "💻",
    },

    {
      minggu: "Minggu 4",
      kegiatan: "Gotong Royong Lingkungan",
      tanggal: "24 Juli 2026",
      deskripsi:
        "Kegiatan kerja bakti bersama masyarakat membersihkan area padukuhan.",
      icon: "🧹",
    },
  ];

  return (
    <>
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section
        className="gallery-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.65)
            ),
            url(${galeriBackground})
          `,
        }}
      >
        <h1>Galeri KKN Pagerjurang 2026</h1>

        <p>
          Dokumentasi kegiatan mahasiswa Kuliah Kerja Nyata (KKN)
          selama satu bulan di Padukuhan Pagerjurang, Kalurahan
          Kepuharjo, Kecamatan Cangkringan, Kabupaten Sleman.
        </p>
      </section>

      {/* ========================= */}
      {/* TENTANG */}
      {/* ========================= */}

      <section className="gallery-intro">
        <h2>Dokumentasi Kegiatan</h2>

        <p>
          Halaman ini berisi dokumentasi berbagai kegiatan yang telah
          dilaksanakan oleh mahasiswa KKN bersama masyarakat Pagerjurang,
          mulai dari penerimaan, survei wilayah, pelaksanaan program kerja,
          hingga penutupan kegiatan KKN.
        </p>
      </section>

      {/* ========================= */}
      {/* TIMELINE */}
      {/* ========================= */}

      <section
        className="gallery-timeline"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.55)
            ),
            url(${galeriBackground})
          `,
        }}
      >
        <div className="gallery-container">

          <div className="gallery-title">
            <span>KEGIATAN KKN</span>

            <h2>Timeline Kegiatan</h2>

            <p>
              Berbagai kegiatan yang dilaksanakan selama
              pelaksanaan KKN di Padukuhan Pagerjurang.
            </p>
          </div>

          <div className="gallery-grid">
            {dokumentasi.map((item, index) => (
              <div
                className="gallery-card"
                key={index}
              >

                {/* FOTO / ICON */}

                <div className="gallery-image">

                  {item.icon.startsWith("/") ? (
                    <img
                      src={item.icon}
                      alt={item.kegiatan}
                    />
                  ) : (
                    <span>
                      {item.icon}
                    </span>
                  )}

                </div>

                {/* CONTENT */}

                <div className="gallery-content">

                  <div className="gallery-meta">

                    <span className="gallery-week">
                      {item.minggu}
                    </span>

                    <small>
                      {item.tanggal}
                    </small>

                  </div>

                  <h3>
                    {item.kegiatan}
                  </h3>

                  <p>
                    {item.deskripsi}
                  </p>

                  <button
                    type="button"
                    className="gallery-button"
                    onClick={() =>
                      alert(
                        `${item.kegiatan}\n\n${item.deskripsi}`
                      )
                    }
                  >
                    Lihat Dokumentasi
                  </button>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================= */}
      {/* STATISTIK */}
      {/* ========================= */}

      <section className="gallery-statistics">

        <div className="statistics-container">

          <div className="stat-card">
            <h1>1</h1>
            <p>Bulan Kegiatan</p>
          </div>

          <div className="stat-card">
            <h1>4</h1>
            <p>Minggu Pelaksanaan</p>
          </div>

          <div className="stat-card">
            <h1>8</h1>
            <p>Kegiatan Utama</p>
          </div>

          <div className="stat-card">
            <h1>100+</h1>
            <p>Dokumentasi Foto</p>
          </div>

        </div>

      </section>

      {/* ========================= */}
      {/* PENUTUP */}
      {/* ========================= */}

      <section className="gallery-footer">

        <h2>
          Terima Kasih Pagerjurang
        </h2>

        <p>
          Dokumentasi ini menjadi kenangan dan bukti kolaborasi antara
          mahasiswa KKN dengan masyarakat Padukuhan Pagerjurang dalam
          melaksanakan berbagai program pengabdian selama satu bulan
          kegiatan berlangsung.
        </p>

        <p className="footer-period">
          KKN Universitas Respati Yogyakarta •
          Periode Juli–Agustus 2026
        </p>

      </section>
    </>
  );
}

export default Gallery;