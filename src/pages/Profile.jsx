import {
  FaMapMarkerAlt,
  FaUsers,
  FaMountain,
  FaLeaf,
  FaStore,
  FaHandshake,
} from "react-icons/fa";

function Profile() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/merapi.jpg') center/cover",
          color: "white",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Profile Padukuhan Pagerjurang
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "32px",
          }}
        >
          Mengenal lebih dekat Padukuhan Pagerjurang,
          Kalurahan Kepuharjo,
          Kecamatan Cangkringan,
          Kabupaten Sleman,
          Daerah Istimewa Yogyakarta.
        </p>
      </section>

      {/* Tentang */}
      <section
        style={{
          padding: "80px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2>Tentang Padukuhan</h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "32px",
          }}
        >
          Padukuhan Pagerjurang merupakan salah satu padukuhan yang berada
          di Kalurahan Kepuharjo, Kecamatan Cangkringan, Kabupaten Sleman,
          Daerah Istimewa Yogyakarta.
        </p>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "32px",
          }}
        >
          Berada di kawasan lereng Gunung Merapi, Pagerjurang memiliki
          potensi pada sektor pertanian, UMKM, wisata alam, serta budaya
          masyarakat yang masih terjaga hingga saat ini.
        </p>
      </section>

      {/* Statistik */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "70px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Data Singkat
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          <Card
            icon={<FaUsers />}
            title="Penduduk"
            value="450 Jiwa"
          />

          <Card
            icon={<FaMapMarkerAlt />}
            title="RT/RW"
            value="4/2"
          />

          <Card
            icon={<FaMountain />}
            title="Lereng"
            value="Merapi"
          />

          <Card
            icon={<FaLeaf />}
            title="Potensi"
            value="Pertanian"
          />
        </div>
      </section>

      {/* Potensi */}
      <section
        style={{
          padding: "80px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Potensi Padukuhan
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <CardPotensi
            icon="🌾"
            title="Pertanian"
            desc="Komoditas utama berupa jagung, talas, sayuran, cabai, palawija, dan hasil bumi lainnya."
          />

          <CardPotensi
            icon="🛍️"
            title="UMKM"
            desc="Berbagai usaha kuliner, dan produk olahan masyarakat."
          />

          <CardPotensi
            icon="🌋"
            title="Wisata"
            desc="Panorama alam lereng Gunung Merapi serta wisata edukasi."
          />
        </div>
      </section>

      {/* Visi */}
      <section
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "80px",
        }}
      >
        <h2>Visi</h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "32px",
          }}
        >
          Terwujudnya Padukuhan Pagerjurang yang mandiri,
          maju, sejahtera, serta mampu mengembangkan potensi lokal
          melalui pemberdayaan masyarakat.
        </p>
      </section>

      {/* Misi */}
      <section
        style={{
          padding: "80px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2>Misi</h2>

        <ul
          style={{
            marginTop: "25px",
            lineHeight: "40px",
          }}
        >
          <li>Meningkatkan kesejahteraan masyarakat.</li>
          <li>Mengembangkan UMKM lokal.</li>
          <li>Mengembangkan potensi wisata.</li>
          <li>Melestarikan budaya lokal.</li>
          <li>Menjaga kelestarian lingkungan.</li>
        </ul>
      </section>

      {/* Lokasi */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <h2>Lokasi Padukuhan</h2>

        <p
          style={{
            marginTop: "20px",
          }}
        >
          Kalurahan Kepuharjo, Kecamatan Cangkringan,
          Kabupaten Sleman, Daerah Istimewa Yogyakarta.
        </p>

        <a
          href="https://maps.google.com/?q=Pagerjurang+Kepuharjo"
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: "30px",
            display: "inline-block",
            background: "#2e7d32",
            color: "white",
            padding: "14px 28px",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Buka Google Maps
        </a>
      </section>
    </>
  );
}

function Card({ icon, title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          color: "#2e7d32",
        }}
      >
        {icon}
      </div>

      <h3>{value}</h3>

      <p>{title}</p>
    </div>
  );
}

function CardPotensi({ icon, title, desc }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <div style={{ fontSize: "45px" }}>{icon}</div>

      <h3>{title}</h3>

      <p>{desc}</p>
    </div>
  );
}

export default Profile;