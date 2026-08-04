import Hero from "../components/Hero";
import Statistic from "../components/Statistic";
import CardUMKM from "../components/CardUMKM";

import slondok from "../assets/images/Slondok.jpg";
import jahe from "../assets/images/Jahe Srikandi Merapi.jpg";
import manggleng from "../assets/images/Manggleng.jpg";
import bakso from "../assets/images/Bakso Goreng.jpg";

import "./Home.css";

function Home() {
  return (
    <>
      <Hero />

      <main className="home">

        {/* ========================= */}
        {/* Tentang */}
        {/* ========================= */}

        <section className="about">

          <div className="container">

            <span className="section-title">
              SELAMAT DATANG
            </span>

            <h2>Padukuhan Pagerjurang</h2>

            <p>
              Padukuhan Pagerjurang merupakan salah satu padukuhan di
              Kalurahan Kepuharjo, Kapanewon Cangkringan, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta.

              Website ini dibuat sebagai media informasi digital yang
              menampilkan profil padukuhan, UMKM lokal, potensi wisata,
              berita kegiatan masyarakat, galeri dokumentasi, serta
              informasi kontak sehingga masyarakat maupun wisatawan
              lebih mudah memperoleh informasi mengenai Pagerjurang.
            </p>

          </div>

        </section>

        {/* ========================= */}
        {/* Statistik */}
        {/* ========================= */}

        <section className="statistic-section">

          <div className="container">

            <Statistic />

          </div>

        </section>

        {/* ========================= */}
        {/* UMKM */}
        {/* ========================= */}

        <section className="umkm-section">

          <div className="container">

            <span className="section-title">
              PRODUK UNGGULAN
            </span>

            <h2>UMKM Padukuhan Pagerjurang</h2>

            <p className="subtitle">
              Produk-produk unggulan hasil karya masyarakat
              Padukuhan Pagerjurang yang memiliki kualitas,
              cita rasa khas, dan layak bersaing di pasar
              yang lebih luas.
            </p>

            <div className="card-grid">

              <CardUMKM
                nama="Slondok"
                kategori="Makanan Ringan"
                gambar={slondok}
              />

              <CardUMKM
                nama="Jahe Srikandi Merapi"
                kategori="Minuman Herbal"
                gambar={jahe}
              />

              <CardUMKM
                nama="Manggleng"
                kategori="Makanan Ringan"
                gambar={manggleng}
              />

              <CardUMKM
                nama="Bakso Goreng"
                kategori="Olahan Makanan"
                gambar={bakso}
              />

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Home;