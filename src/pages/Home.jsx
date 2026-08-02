import Hero from "../components/Hero";
import Statistic from "../components/Statistic";
import CardUMKM from "../components/CardUMKM";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="home">

        {/* Tentang */}
        <section className="about">
          <div className="container">

            <span className="section-title">
              Selamat Datang
            </span>

            <h2>
              Padukuhan Pagerjurang
            </h2>

            <p>
              Padukuhan Pagerjurang memiliki berbagai potensi salah satunya UMKM yang dapat dikembangkan. Namun, informasi mengenai pelaku usaha dan produk yang dihasilkan masih belum terdokumentasi dan dipublikasikan secara optimal melalui media digital. Oleh karena itu, digitalisasi profil UMKM menjadi salah satu upaya untuk memperkenalkan potensi lokal sekaligus mendukung promosi dan pengembangan ekonomi masyarakat..
            </p>

          </div>
        </section>

        {/* Statistik */}
        <section className="statistic-section">
          <div className="container">

            <Statistic />

          </div>
        </section>

        {/* UMKM */}
        <section className="umkm-section">

          <div className="container">

            <span className="section-title">
              Produk Unggulan
            </span>

            <h2>UMKM Pagerjurang</h2>

            <p className="subtitle">
              Berbagai produk unggulan masyarakat
              Padukuhan Pagerjurang.
            </p>

            <div className="card-grid">

              <CardUMKM
                nama="Slondok"
                kategori="Makanan"
              />

              <CardUMKM
                nama="Jahe Srikandi Merapi"
                kategori="Jamu"
              />

              <CardUMKM
                nama="Manggleng"
                kategori="Makanan"
              />

              <CardUMKM
                nama="Bakso Goreng"
                kategori="Makanan"
              />
              
            </div>

          </div>

        </section>

      </main>
    </>
  );
}