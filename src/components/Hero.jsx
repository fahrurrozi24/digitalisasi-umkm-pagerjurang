import Hero from "../components/Hero";
import Statistic from "../components/Statistic";
import CardUMKM from "../components/CardUMKM";

import slondok from "../assets/images/Slondok.jpg";
import jahe from "../assets/images/Wedang Jahe.jpg";
import manggleng from "../assets/images/Manggleng.jpg";
import baksogoreng from "../assets/images/Bakso Goreng.jpg";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="home">

        {/* ===================== */}
        {/* Tentang */}
        {/* ===================== */}

        <section className="about">

          <div className="container">

            <span className="section-title">
              Selamat Datang
            </span>

            <h2>
              Padukuhan Pagerjurang
            </h2>

            <p>
              Padukuhan Pagerjurang merupakan salah satu padukuhan di
              Kalurahan Kepuharjo, Kapanewon Cangkringan, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta. Masyarakat Pagerjurang memiliki
              berbagai potensi di bidang pertanian, UMKM, serta wisata yang
              terus berkembang.

              Website ini dibuat sebagai media informasi digital untuk
              memperkenalkan profil padukuhan, produk UMKM, potensi wisata,
              berita kegiatan masyarakat, hingga dokumentasi kegiatan KKN
              Universitas Respati Yogyakarta.
            </p>

          </div>

        </section>

        {/* ===================== */}
        {/* Statistik */}
        {/* ===================== */}

        <section className="statistic-section">

          <div className="container">

            <Statistic />

          </div>

        </section>

        {/* ===================== */}
        {/* UMKM */}
        {/* ===================== */}

        <section className="umkm-section">

          <div className="container">

            <span className="section-title">
              Produk Unggulan
            </span>

            <h2>
              UMKM Padukuhan Pagerjurang
            </h2>

            <p className="subtitle">
              Berbagai produk unggulan hasil karya masyarakat
              Padukuhan Pagerjurang yang memiliki kualitas
              serta cita rasa khas.
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