import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2E7D32",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 50px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2 style={{ margin: 0 }}>
        Pagerjurang
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Link style={menu} to="/">Home</Link>
        <Link style={menu} to="/profile">Profil</Link>
        <Link style={menu} to="/umkm">UMKM</Link>
        <Link style={menu} to="/tourism">Wisata</Link>
        <Link style={menu} to="/news">Berita</Link>
        <Link style={menu} to="/gallery">Galeri</Link>
        <Link style={menu} to="/contact">Kontak</Link>
      </div>
    </nav>
  );
}

const menu = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "17px",
};

export default Navbar;