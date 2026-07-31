import { useEffect, useState } from "react";
import { getUmkm } from "../services/umkmService";
import { getNews } from "../services/newsService";
import { getGallery } from "../services/galleryService";
import { getTourism } from "../services/tourismService";

function Dashboard() {

  const [umkm, setUmkm] = useState([]);
  const [news, setNews] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [tourism, setTourism] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  async function loadData() {

    setUmkm(await getUmkm());

    setNews(await getNews());

    setGallery(await getGallery());

    setTourism(await getTourism());

  }

  return (

    <div>

      <h1>Dashboard Admin</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Card title="UMKM" total={umkm.length} />

        <Card title="Berita" total={news.length} />

        <Card title="Galeri" total={gallery.length} />

        <Card title="Wisata" total={tourism.length} />

      </div>

    </div>

  );
}

function Card({ title, total }) {
  return (
    <div
      style={{
        background: "#2E7D32",
        color: "white",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2>{title}</h2>

      <h1>{total}</h1>
    </div>
  );
}

export default Dashboard;